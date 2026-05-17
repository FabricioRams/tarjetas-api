# Usamos una imagen ligera de Node.js
FROM node:22-alpine

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos de dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Compilamos el proyecto
RUN npm run build

# Exponemos el puerto 3000 (el que usa NestJS por defecto)
EXPOSE 3000

# Comando para iniciar la aplicación en producción
CMD ["npm", "run", "start:prod"]