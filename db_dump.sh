#!/bin/bash


# Dump PC production database


#set -x
DIR=PATH_TO_ENV_FILE

#import env file
. $DIR/.env
db_name=$MYSQL_DATABASE
date_time=`date +%Y%m%d_%H%M_`
file_name=${date_time}${db_name}.sql


#dump from mariadb container to local
docker exec project-control_db_1 mysqldump -u$MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DATABASE > /PATH_TO_DUMP/${file_name}


##
##23 55 * * 5 command to run
## * * * * /bin/sh /home/clouduser/dump_db.sh >> /home/clouduser/dump.log
