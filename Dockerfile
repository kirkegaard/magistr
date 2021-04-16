FROM node:alpine AS base
RUN mkdir -p /usr/src
WORKDIR /usr/src
EXPOSE 3000

# Development
FROM base AS dev
ENV NODE_ENV development
VOLUME /usr/src
CMD yarn dev

# Production
FROM base AS prod
ENV NODE_ENV production
COPY ./ ./
RUN yarn install --production
RUN yarn build
CMD yarn start
