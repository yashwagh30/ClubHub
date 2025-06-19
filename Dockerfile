# Use a lightweight Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install serve (globally, to serve static files)
RUN npm install --global serve

# Expose port (choose any available port)
EXPOSE 52661

# Start the static file server
CMD ["serve", ".", "-l", "52661"]
