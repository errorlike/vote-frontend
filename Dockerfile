FROM node:18 AS build-stage
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm run build
FROM nginx:1.23.4-alpine
EXPOSE 80
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
