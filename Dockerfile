FROM node:18

RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN chmod +x wait-for-postgres.sh

EXPOSE 3000

CMD ["./wait-for-postgres.sh", "postgres", "node", "server.js"]
