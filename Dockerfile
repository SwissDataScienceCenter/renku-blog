FROM nginxinc/nginx-unprivileged:1.25-alpine

COPY build /usr/share/nginx/html
