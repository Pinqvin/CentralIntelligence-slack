FROM node:8

ENV MY_PORT=3005

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

# Build application and remove src folder as unnecessary
RUN npm run build && rm -rf src
RUN npm prune --production

EXPOSE $MY_PORT
CMD [ "npm", "run", "serve" ]
