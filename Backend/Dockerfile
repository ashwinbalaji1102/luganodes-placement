FROM node:14
WORKDIR /app
WORKDIR /Backend
COPY package.json package-lock.json ./
RUN npm install
COPY server.js ./
COPY config/ ./config/
COPY controller/ ./controller/
COPY middleware/ ./middleware/
COPY models/ ./models/
COPY routes/ ./routes/
EXPOSE 8080
CMD ["node", "server.js"]
