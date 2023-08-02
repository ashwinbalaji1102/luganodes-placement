FROM node:14
WORKDIR /app
WORKDIR /FrontEnd
COPY FrontEnd/package.json FrontEnd/package-lock.json ./
RUN npm install
COPY FrontEnd/src/ ./src/
COPY FrontEnd/public/ ./public/
EXPOSE 3000
CMD ["npm", "start"]
WORKDIR ..
WORKDIR /Backend
COPY Backend/package.json Backend/package-lock.json ./
RUN npm install
COPY Backend/server.js ./
COPY Backend/config/ ./config/
COPY Backend/controller/ ./controller/
COPY Backend/middleware/ ./middleware/
COPY Backend/models/ ./models/
COPY Backend/routes/ ./routes/
EXPOSE 8080
CMD ["node", "server.js"]
