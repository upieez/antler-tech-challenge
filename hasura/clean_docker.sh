docker rm -vf $(docker ps -qa)
docker volume rm $(docker volume ls -q)