FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install
RUN npm install -g prisma

# Copy rest of the application
COPY . .

# Generate Prisma client and build
RUN npx prisma generate
RUN npm run build

EXPOSE 7000

# Run migrations and start the application
CMD npm run migrate && node dist/index.js