#!/usr/bin/env bash


SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
PROJ_DIR="$(dirname $SCRIPT_DIR)"

docker exec -it wiki_db bash -c "mkdir -p /tmp/sqlbackups"

# Delete old backups
docker exec -it wiki_db bash -c "rm /tmp/sqlbackups/*.sql"

# Create backup with timestamp in name
docker exec -it wiki_db  bash -c "mysqldump --host='wiki_db' --user='wiki_user' --password='w1k1p455w0rd' wiki_sql_db
> /tmp/sqlbackups/$(date '+%Y-%m-%d_%H:%M:%S').sql"

# Move backup from container to host filesystem
docker cp wiki_db:/tmp/sqlbackups/. $PROJ_DIR/wiki/sqlbackups/
