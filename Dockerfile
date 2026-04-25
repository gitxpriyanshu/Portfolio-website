# STAGE 1: Build Stage
FROM node:20-slim AS builder

# Disable problematic ARM Neon optimizations during compilation on Apple Silicon
ENV CPPFLAGS="-DPNG_ARM_NEON_OPT=0"
ENV CFLAGS="-DPNG_ARM_NEON_OPT=0"

# Install system dependencies required for image optimization libraries
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    autoconf \
    automake \
    libtool \
    pkg-config \
    nasm \
    libpng-dev \
    libjpeg-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install dependencies first (leverage Docker cache)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# STAGE 2: Runner Stage
FROM nginx:alpine AS runner

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
