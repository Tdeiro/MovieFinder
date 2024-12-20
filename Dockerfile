FROM node:20-slim

WORKDIR /usr/src/app

COPY package.json ./
RUN yarn

COPY . .

RUN yarn run build  --progress

EXPOSE 3000

CMD ["yarn", "run", "start"]