FROM node_base AS build

# Establecer directorio 
WORKDIR /app/dawa

#copiar todos los archivos cuyo nombre empieza con package
COPY package*.json .

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir el proyecto para producción
RUN npm run build

# Exponer el puerto 
EXPOSE 3000

CMD [ "npm", "start" ]