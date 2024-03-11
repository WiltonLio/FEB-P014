# Escolha a imagem base
FROM node:20

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Instale o Angular CLI globalmente no contêiner
RUN npm install -g @angular/cli@8.3.29

# Exponha a porta que o aplicativo usará
EXPOSE 4200

# Comando para iniciar o aplicativo
CMD ["ng", "serve", "--host", "0.0.0.0"]
