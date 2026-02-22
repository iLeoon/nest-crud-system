# ---- Build stage ----
FROM node:20-alpine AS builder
WORKDIR /app

COPY packages/nest/package.json ./
RUN yarn install

COPY packages/nest ./
RUN node_modules/.bin/nest build && ls -la dist/

# ---- Production stage ----
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

EXPOSE 3000
CMD ["node", "dist/main.js"]
