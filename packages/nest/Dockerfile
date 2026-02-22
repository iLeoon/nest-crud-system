FROM node:20-alpine
WORKDIR /app

COPY packages/nest/package.json ./
RUN yarn install

COPY packages/nest ./
RUN node_modules/.bin/nest build && ls -la dist/

ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/main.js"]
