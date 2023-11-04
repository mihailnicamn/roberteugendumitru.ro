#!/bin/bash
#save key to file
echo "$SSHKEY" > ./key.pem
chmod 600 ./key.pem
#copy files to server
scp -i ./key.pem -r ./* $SSHUSER@$SSHHOST:$SSHPATH
