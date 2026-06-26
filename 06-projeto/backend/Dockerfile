# syntax=docker/dockerfile:1

###############################################################################
# Stage 1 — deps: instala TODAS as dependências (incl. devDeps p/ buildar)
###############################################################################
FROM node:24-alpine AS deps
WORKDIR /app

# Prisma precisa do OpenSSL no Alpine para gerar/rodar os query engines.
RUN apk add --no-cache openssl

# Copiamos só os manifestos primeiro: enquanto eles não mudam, o Docker
# reaproveita a camada de cache e não reinstala tudo a cada build.
COPY package.json package-lock.json ./
# Ignora o "prepare" (husky) — não faz sentido dentro do container.
RUN npm ci --ignore-scripts

###############################################################################
# Stage 2 — build: gera o Prisma Client e compila o TypeScript
###############################################################################
FROM node:24-alpine AS build
WORKDIR /app
RUN apk add --no-cache openssl

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Gera o Prisma Client para o target do Alpine e compila (dist/).
RUN npx prisma generate \
  && npm run build \
  # Remove as devDeps deixando node_modules pronto pra produção.
  && npm prune --omit=dev

###############################################################################
# Stage 3 — runner: imagem final, mínima e sem ferramentas de build
###############################################################################
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN apk add --no-cache openssl

# Roda como usuário não-root (boa prática de segurança). O node:alpine já
# traz o usuário "node".
COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/dist ./dist
COPY --from=build --chown=node:node /app/package.json ./package.json
# Schema + migrations: necessários para rodar "prisma migrate deploy".
COPY --from=build --chown=node:node /app/prisma ./prisma

USER node

EXPOSE 3000

# Aplica migrations pendentes e sobe a API. Idempotente: se não há migration
# nova, o deploy é um no-op.
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main"]
