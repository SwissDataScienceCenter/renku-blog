FROM nginxinc/nginx-unprivileged:1.25-alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY build /usr/share/nginx/html
