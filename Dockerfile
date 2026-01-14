FROM node:16.20.2

# Forzar versión exacta de npm
RUN npm install -g npm@8.19.4

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]
