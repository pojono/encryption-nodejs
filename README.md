Проект для проверки поточного шифрования

Склонировать проект:
```
git clone https://github.com/pojono/encryption-nodejs.git
cd encryption-nodejs
```

docker build -t encryption .

docker run -d -p 3000:3000 --name encryption encryption 

docker exec -it encryption sh
