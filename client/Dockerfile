# Step 1: Set up the base image for Node.js
FROM node:16 AS build

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json (if exists) to the container
COPY client/package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files to the container
COPY client/ ./

# Step 6: Build the React app
RUN npm run build

# Step 7: Expose the port (Optional based on your app's need)
EXPOSE 3000

# Step 8: Start the application (Optional based on your app's need)
CMD ["npm", "start"]
