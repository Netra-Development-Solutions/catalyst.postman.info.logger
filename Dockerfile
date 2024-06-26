# Use an official Node.js runtime as a parent image
FROM node:16-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]