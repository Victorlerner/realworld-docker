docker-compose -f docker-compose.yml -f docker-compose.developement.yml up --build
docker ps
docker logs realworld-docker-api
docker-compose up --build
docker exec -it realworld-docker-api sh
docker network ls
