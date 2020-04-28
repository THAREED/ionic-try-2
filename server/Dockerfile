FROM node:13.8.0-alpine3.11

WORKDIR /server

COPY package.json /server

RUN npm install

COPY . /server

CMD ["npm", "start"]