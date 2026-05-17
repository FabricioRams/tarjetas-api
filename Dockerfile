FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

# CORRECCIÓN: Apuntamos directamente a dist/src/main.js
CMD ["node", "dist/src/main.js"]