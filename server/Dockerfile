# `docker run --rm --build-arg "NODE_VERSION=12.18.3-alpine3.12" -f Dockerfile`

ARG NODE_VERSION=12.18.3-alpine3.12

FROM node:${NODE_VERSION}

RUN apk -U update && \
  apk add netcat-openbsd && \
  apk add --no-cache bash

ENV NODE_ENV production

ENV API_PORT 5000

WORKDIR /app

COPY package*.json ./

RUN npm install
# RUN npm ci --only=production

RUN npm prune --production

COPY . ./

RUN chown -R node:node ./

USER node

EXPOSE ${API_PORT}

ENTRYPOINT [ "bash" ]