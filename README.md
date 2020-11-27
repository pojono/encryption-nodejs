docker build -t encryption .
docker run -d -p 3000:3000 --name encryption encryption 
docker exec -it encryption sh
