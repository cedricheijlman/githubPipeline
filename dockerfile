# Gebruik een officiële Node.js-image als basis
FROM node:14

# Stel de werkdirectory in de container in
WORKDIR /usr/src/app

# Kopieer de package.json en package-lock.json naar de container
COPY package*.json ./

# Installeer de afhankelijkheden
RUN npm install

# Kopieer de rest van de applicatie naar de container
COPY . .

# Stel het commando in dat draait wanneer de container start
CMD ["node", "app.js"]

# Stel de poort in die de applicatie gebruikt
EXPOSE 3000