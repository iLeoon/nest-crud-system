# ---- Build stage ----
FROM node:20-alpine AS builder
WORKDIR /app

ARG NEXT_PUBLIC_NEST_API_URL=http://localhost:3000
ENV NEXT_PUBLIC_NEST_API_URL=$NEXT_PUBLIC_NEST_API_URL

COPY package.json yarn.lock ./
COPY packages/nest/package.json ./packages/nest/package.json
COPY packages/next/package.json ./packages/next/package.json

RUN yarn install --frozen-lockfile

COPY packages/next ./packages/next

WORKDIR /app/packages/next
RUN yarn build

# ---- Production stage ----
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages/next/.next ./.next
COPY --from=builder /app/packages/next/public ./public
COPY --from=builder /app/packages/next/package.json ./package.json

EXPOSE 3001
CMD ["node_modules/.bin/next", "start", "-p", "3001"]
