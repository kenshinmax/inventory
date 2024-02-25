FROM node:17-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app/

EXPOSE 4000
# required for docker desktop port mapping

CMD ["npm", "run", "dev"]