# Use the official Node.js image for building React app
FROM node:latest AS build

WORKDIR /usr/src/app

# Install dependencies
COPY client/package*.json ./
RUN npm install

# Copy the source code and build the frontend
COPY client/ .
RUN npm run build

# Use Nginx to serve the static files
FROM nginx:alpine

# Copy the build folder to the Nginx server
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose the port Nginx runs on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
