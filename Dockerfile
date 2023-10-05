# Imagem base
FROM node:16.18.1-bullseye-slim

# Set environment variables
ENV DEBIAN_FRONTEND noninteractive
ENV PORT1=801
ENV PORT2=802

# Diretório de trabalho
WORKDIR /app

COPY . .

# Instala dependências do Node.js
RUN npm install --force

# Porta exposta pelo contêiner
EXPOSE $PORT1 $PORT2

ENTRYPOINT ["npm", "start"]
