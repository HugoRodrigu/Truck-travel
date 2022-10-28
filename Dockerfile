FROM node:alpine
WORKDIR /src/app.ts
COPY package*.json .
RUN npm install
COPY . .

# CMD [ "npm", "start" ]

CMD ["npm", "run", "dev"]

