# 1. Instalación de dependencias
FROM oven/bun:canary-alpine AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# 2. Construcción del proyecto
FROM oven/bun:canary-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN bun run build

# 3. Producción (Imagen final)
FROM oven/bun:canary-alpine AS runner
WORKDIR /app

# Usamos el formato KEY=VALUE para evitar warnings
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# Importante para que el contenedor acepte conexiones externas
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

# Ejecución
CMD ["bun", "server.js"]
