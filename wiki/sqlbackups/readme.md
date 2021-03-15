# Wiki DB Backups

Backups run via following cronjob command:
```bash
mysqldump --host='wiki_db' --user='wiki_user' --password='w1k1p455w0rd' wiki_sql_db > /var/www/html/sqlbackups/$(date '+%Y-%m-%d_%H:%M:%S').sql
```

