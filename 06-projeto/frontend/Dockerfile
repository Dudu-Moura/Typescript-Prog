# syntax=docker/dockerfile:1

###############################################################################
# Stage 1 — build: compila a SPA com o Vite
#
# Atenção: o Vite "inlina" as variáveis VITE_* dentro do bundle em tempo de
# BUILD. Por isso a URL da API entra como build-arg (VITE_API_URL) e não como
# variável de runtime.
###############################################################################
FROM node:24-alpine AS build
WORKDIR /app

# Manifestos primeiro para aproveitar o cache de camadas do Docker.
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

# Código-fonte e build.
COPY . .

# URL da API embutida no bundle. Pode ser sobrescrita no build:
#   docker build --build-arg VITE_API_URL=https://minha-api ...
ARG VITE_API_URL=https://typescript-prog-production.up.railway.app
ENV VITE_API_URL=$VITE_API_URL
RUN npm run build

###############################################################################
# Stage 2 — runner: serve os arquivos estáticos com nginx
#
# A imagem oficial do nginx roda envsubst nos arquivos em /etc/nginx/templates
# na inicialização, então conseguimos injetar a porta via env ${PORT}
# (Railway/containers definem a porta dinamicamente).
###############################################################################
FROM nginx:1.27-alpine AS runner

# Porta padrão; em produção o Railway injeta a sua própria via env PORT.
ENV PORT=8080

# Template do nginx (vira /etc/nginx/conf.d/default.conf após o envsubst).
COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template

# Artefatos estáticos do build.
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

# O entrypoint padrão da imagem nginx já aplica os templates e sobe o servidor.
