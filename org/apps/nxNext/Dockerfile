FROM node:20-alpine
WORKDIR /app

# Standalone output już jest zbudowany przez nx build
COPY .next/standalone ./
COPY .next/static ./.next/static
# COPY apps/nxNext/public ./public

EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "apps/nxNext/server.js"]
# CMD ["tail", "-f", "/dev/null"]