# Usa una imagen base de Node.js
FROM node:latest as build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación
RUN npm run build 

# Usa una imagen base más ligera de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos compilados de la aplicación Angular en la carpeta de despliegue de Nginx
COPY --from=build /app/dist/app_tips/browser /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
