# ---- Build stage ----
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json yarn.lock ./
COPY packages/nest/package.json ./packages/nest/package.json
COPY packages/next/package.json ./packages/next/package.json

RUN yarn install --frozen-lockfile

COPY packages/nest ./packages/nest

WORKDIR /app/packages/nest
RUN yarn build

# ---- Production stage ----
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages/nest/dist ./dist
COPY --from=builder /app/packages/nest/package.json ./package.json

EXPOSE 3000
CMD ["node", "dist/main"]
