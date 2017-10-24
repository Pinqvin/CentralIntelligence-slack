FROM node:8

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

# Build application and remove src folder as unnecessary
RUN npm run build && rm -rf src
RUN npm prune --production

EXPOSE 8000
CMD [ "npm", "run", "serve" ]
