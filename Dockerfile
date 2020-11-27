FROM node:13.10.1-alpine as builder
WORKDIR /app
RUN npm i -g typescript
COPY package.json .
RUN yarn
COPY . .
RUN tsc
CMD node ./dist/app.js

