#!/bin/sh

apt update;

##########################################
# install automysqlbackup and run backup
apt install automysqlbackup -y;
FILE=wiki_backup.sql.gz;
# if backup file exists restore db
if test -f "$FILE"; then
	# copy sql backup script to docker container
	docker cp $FILE wiki:/$FILE;

	# run bash command in container to restore database from automysqlbackup
	docker exec wiki /bin/bash gunzip < $FILE | mysql -u $MYSQL_USER -p $MYSQL_PASSWORD;
fi;
##########################################


##########################################
# install packages necessary for file metadata processing
apt install -y ghostscript poppler-utils
##########################################

