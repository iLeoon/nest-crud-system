# ---- Build stage ----
FROM node:20-alpine AS builder
WORKDIR /app

ARG NEXT_PUBLIC_NEST_API_URL=http://localhost:3000
ENV NEXT_PUBLIC_NEST_API_URL=$NEXT_PUBLIC_NEST_API_URL

COPY packages/next/package.json ./
RUN yarn install

COPY packages/next ./
RUN yarn build

# ---- Production stage ----
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

EXPOSE 3001
CMD ["node_modules/.bin/next", "start", "-p", "3001"]
