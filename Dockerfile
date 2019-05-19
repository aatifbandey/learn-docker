# Specify a base image

FROM node:alpine

#Install dependencies

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]