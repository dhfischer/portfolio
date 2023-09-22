# Use a imagem Node.js como base
FROM node:16

# Crie um diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código-fonte para o diretório de trabalho
COPY . .

# Exponha a porta em que o servidor Express.js está ouvindo (geralmente a porta 3000)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
