# syntax=docker/dockerfile:1

# ---- build stage: the whole toolchain lives here and none of it ships ----
FROM node:24-alpine AS builder
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@11.3.0 --activate

COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# ---- runtime stage ----
# adapter-node emits a self-contained bundle, so no node_modules is copied.
# Everything the server needs is the ~4 MB build/ directory.
FROM node:24-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
# The only POST is a small JSON beacon, so cap request bodies well below the
# adapter's 512K default.
ENV BODY_SIZE_LIMIT=16K

COPY --from=builder /app/build ./build

USER node

CMD ["node", "--max-old-space-size=128", "--max-semi-space-size=2", "build"]
