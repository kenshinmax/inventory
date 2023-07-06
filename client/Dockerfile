# pull official base image
FROM node:18-alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
#copies package.json and package-lock.json to Docker environment
COPY package.json .

#RUN yarn install

RUN npm install --silent
RUN npm install react-scripts -g --silent


# Copies everything over to Docker environment
COPY . .
EXPOSE 3000

# start app
CMD ["npm", "start"]