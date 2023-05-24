# Use a Node.js base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /server

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install project dependencies
RUN yarn install

# Copy the rest of the project files to the working directory
COPY . .

# Expose the port that your Node.js application listens on
EXPOSE 5000

# Start the Node.js application
CMD ["yarn", "start"]




