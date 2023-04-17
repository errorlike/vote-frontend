FROM node:18 AS build-stage
WORKDIR /usr/src/app
COPY . .
ENV VITE_BACKEND_URL=http://localhost:8080/api/v1
RUN npm ci
CMD ["npm","run","build"]
FROM nginx:1.23.4-alpine
EXPOSE 80
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
