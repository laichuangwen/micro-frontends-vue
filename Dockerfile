FROM nginx:1.20-alpine
EXPOSE 10000

COPY release/  /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
RUN echo 'echo init ok!!'