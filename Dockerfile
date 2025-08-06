FROM nginxinc/nginx-unprivileged:1.29-alpine

COPY --chown=nginx:root --chmod=664  nginx/default.conf /etc/nginx/conf.d/default.conf

COPY build /usr/share/nginx/html
