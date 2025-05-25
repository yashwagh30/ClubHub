# Dockerfile

FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 3002

CMD ["nginx", "-g", "daemon off;"]
