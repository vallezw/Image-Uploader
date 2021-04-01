FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

# Development
RUN npm install

# Production
# RUN npm ci --only=production

COPY . .

EXPOSE 5000
CMD [ "node", "src/index.js" ]