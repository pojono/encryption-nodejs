Проект для проверки поточного шифрования

Склонировать проект:
```
git clone https://github.com/pojono/encryption-nodejs.git
cd encryption-nodejs
```
Собрать Docker образ:
```
docker build -t encryption .
```

Запуск Docker образа:
```
docker run -d -p 3000:3000 --name encryption encryption 
```

Заглянуть внутрь Docker контейнера:

docker exec -it encryption sh
