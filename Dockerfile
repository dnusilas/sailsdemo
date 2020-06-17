FROM node:latest

RUN npm -g install sails

RUN mkdir -p /usr/src/app
# COPY . /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm install

COPY . /usr/src/app

# ENV HOST=0.0.0.0
# EXPOSE 3000

CMD [ "sails", "lift" ]
