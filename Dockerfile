FROM node:14
WORKDIR /app
COPY FrontEnd/package.json FrontEnd/package-lock.json ./FrontEnd
COPY FrontEnd/src/ ./FrontEnd/src/
COPY FrontEnd/public/ ./FrontEnd/public/
COPY BackEnd/ ./BackEnd
WORKDIR /FrontEnd
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
WORKDIR ../BackEnd
RUN npm install
EXPOSE 8080
CMD ["node", "server.js"]
