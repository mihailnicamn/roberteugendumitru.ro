#!/bin/bash
sudo -i;
cd /root/app;
npm run build;
pm2 restart all;