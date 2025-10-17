# Development mode - runs webpack-dev-server
FROM node:18-alpine
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install -f
RUN npm install -g webpack webpack-cli

# Copy source code
COPY . .

# Expose the port
EXPOSE 3010

# Start the development server
CMD ["npm", "run", "dev"]
