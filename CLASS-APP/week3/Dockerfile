#specify a base image
FROM node:alpine

#install dependencies
WORKDIR /apps

COPY ./package.json ./
RUN npm install express
COPY ./ ./

CMD ["npm","start"]