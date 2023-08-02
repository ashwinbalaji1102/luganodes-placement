FROM node:14
WORKDIR /app
WORKDIR /FrontEnd
COPY package.json package-lock.json ./
RUN npm install
COPY src/ ./src/
COPY public/ ./public/
EXPOSE 3000
CMD ["npm","start"]