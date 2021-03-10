FROM node:14-alpine as builder

WORKDIR /app
ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install

ADD . /app

EXPOSE 3000

CMD ["npm", "run", "start"]
