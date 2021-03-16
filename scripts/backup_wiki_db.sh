#!/usr/bin/env bash


SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
PROJ_DIR="$(dirname $SCRIPT_DIR)"

source $PROJ_DIR/wiki/db.env

docker exec -it wiki_db bash -c "mkdir -p /tmp/sqlbackups"

# Delete old backups
docker exec -it wiki_db bash -c "rm /tmp/sqlbackups/*.sql"

# Create backup with timestamp in name
docker exec -it wiki_db  bash -c "mysqldump --host='wiki_db' --user=$MYSQL_USER --password=$MYSQL_PASSWORD $MYSQL_DATABASE 
> /tmp/sqlbackups/$(date '+%Y-%m-%d_%H:%M:%S').sql"

# Move backup from container to host filesystem
docker cp wiki_db:/tmp/sqlbackups/. $PROJ_DIR/wiki/sqlbackups/
