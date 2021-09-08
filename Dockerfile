ARG PORT=3000
FROM node:14-alpine AS node
FROM node AS builder
WORKDIR /app 
COPY package*.json ./
RUN npm i               
COPY . .
EXPOSE ${PORT}
ENTRYPOINT [ "npm", "start" ]