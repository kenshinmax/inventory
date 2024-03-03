FROM node:17-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app/

COPY products.json /products.json
 
EXPOSE 4000
# required for docker desktop port mapping

CMD ["npm", "run", "dev"] && \
mongoimport --username ${MONGODB_USER} --password ${MONGODB_PASS} --uri ${MONGODB_URI} --collection products --drop --file /products.json