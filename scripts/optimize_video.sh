#!/bin/bash
 
function optimize_video {
        FILE_NAME=$1

        echo "FILE_NAME: $FILE_NAME"

        ffmpeg  -y -i "$FILE_NAME".mp4 -vcodec libx265 \
                -crf 30 "$FILE_NAME"_libx265_crf30.mp4

        ffmpeg  -y -i "$FILE_NAME"_libx265_crf30.mp4 \
                -movflags +faststart -vcodec copy \
                -acodec copy "$FILE_NAME"_libx265_crf30_faststart.mp4 

        mkdir "$FILE_NAME"_hls

        ffmpeg  -y -i "$FILE_NAME"_libx265_crf30_faststart.mp4 \
                -vf scale=w=1280:h=720:force_original_aspect_ratio=decrease \
                -c:a aac -ar 48000 -b:a 128k -c:v h264 -profile:v main \
                -crf 20 -g 48 -keyint_min 48 -sc_threshold 0 -b:v 2500k \
                -maxrate 2675k -bufsize 3750k -hls_time 4 -hls_playlist_type vod \
                -hls_segment_filename "$FILE_NAME"_hls/720p_%03d.ts "$FILE_NAME"_hls/720p.m3u8

        # ffmpeg  -y -i "$FILE_NAME"_libx265_crf30_faststart.mp4 -b:v 0 -crf 30 \
        #         -pass 1 -an -f webm /dev/null

        # ffmpeg  -y -i "$FILE_NAME"_libx265_crf30_faststart.mp4 -b:v 0 -crf 30 \
        #         -pass 2 "$FILE_NAME"_libx265_crf30_faststart.webm
}

filename=$1
if [[ -n "$filename" ]] && [[ $filename == *.mp4 ]]; then
	filename=$(basename $filename .mp4)
	optimize_video $filename
else
	echo "argument error"
fi

# ffmpeg -y -i "song.mp3" -c:a aac -b:a 128k -muxdelay 0 -f segment -sc_threshold 0 -segment_time 7 -segment_list "playlist.m3u8" -segment_format mpegts "file%d.m4a"
# ffmpeg -y -i file.wav -c:a libmp3lame -q:a 0 -map 0:0 -f segment -segment_time 10 -segment_list segments.m3u8 -segment_format mpegts 'output%03d.ts'
