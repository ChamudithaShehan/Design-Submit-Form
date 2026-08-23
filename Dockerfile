# Stage 1: Base image
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
ENV NEXT_TELEMETRY_DISABLED=1

# Build-time argument defaults (can be overridden with --build-arg)
ARG NEXT_PUBLIC_WHATSAPP_NUMBER=94711531989
ARG NEXT_PUBLIC_IMGBB_API_KEY=00c4f1e1b6e3849c1e9e7ef9ef981db6
ARG NEXT_PUBLIC_IMGBB_API_URL=https://api.imgbb.com/1/upload
ARG NEXT_PUBLIC_DESIGN_ORDER_API_URL=https://erp.shakthimathaya.site/api/public/design-order
ARG NEXT_PUBLIC_DESIGN_ORDER_API_KEY=7f8a92b3c4d5e6f10293847561a2b3c4d5e6f7a8b9c0d1e2

ENV NEXT_PUBLIC_WHATSAPP_NUMBER=${NEXT_PUBLIC_WHATSAPP_NUMBER}
ENV NEXT_PUBLIC_IMGBB_API_KEY=${NEXT_PUBLIC_IMGBB_API_KEY}
ENV NEXT_PUBLIC_IMGBB_API_URL=${NEXT_PUBLIC_IMGBB_API_URL}
ENV NEXT_PUBLIC_DESIGN_ORDER_API_URL=${NEXT_PUBLIC_DESIGN_ORDER_API_URL}
ENV NEXT_PUBLIC_DESIGN_ORDER_API_KEY=${NEXT_PUBLIC_DESIGN_ORDER_API_KEY}

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3001
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3001

CMD ["node", "server.js"]
