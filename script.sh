#!/bin/bash
start=$(date +'%s')
echo "Begin!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
echo "Begin install systems"

sudo docker rm -f cons-fe-admin
sudo docker rmi -f img-fe-admin
sudo docker build . -t img-fe-admin
sudo docker run -d -p 3100:80 --name cons-fe-admin img-fe-admin


echo "bat dau thoi gian:$start"
end=$(date +'%s')
echo "ket thuc thoi gian:$end"

