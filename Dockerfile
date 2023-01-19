FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 9000
EXPOSE 80/udp
EXPOSE 80/tcp

CMD ["npm", "run", "start"]

