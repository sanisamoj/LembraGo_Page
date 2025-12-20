# Etapa 1: Instalação e build
FROM node:22-alpine AS builder

# Diretório de trabalho no container
WORKDIR /app

# Copia apenas os arquivos essenciais primeiro (para otimizar cache)
COPY package.json pnpm-lock.yaml* ./

# Instala PNPM
RUN npm install -g pnpm

# Instala dependências
RUN pnpm install --frozen-lockfile

# Copia o restante do projeto
COPY . .

# Build do Next.js
RUN pnpm build

# Etapa 2: Imagem final para produção
FROM node:18-alpine AS runner

# Diretório da aplicação
WORKDIR /app

# Apenas as pastas necessárias
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/node_modules ./node_modules

# Define variável de ambiente padrão
ENV NODE_ENV=production

# Porta que o container irá expor
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
