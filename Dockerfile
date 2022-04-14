FROM node:current-alpine3.14 as builder

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile

### create build
COPY . .
RUN yarn run buildProd


#nginx
FROM nginx:1.21-alpine

RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]

