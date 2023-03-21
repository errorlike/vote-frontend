FROM node:18
WORKDIR /usr/src/app
COPY . .
ENV VITE_BACKEND_URL=http://localhost:8080/api/v1
RUN npm install
CMD ["npm", "run","dev"]