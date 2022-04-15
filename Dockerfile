FROM node:current-alpine3.14 as builder

WORKDIR /usr/src/app

# Copy and download dependencies
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

# Copy the source files into the image
COPY . .

EXPOSE 3002

CMD yarn start
CMD yarn server