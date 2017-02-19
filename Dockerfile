FROM node:argon-alpine
MAINTAINER Yingray Lu "yingray.lu@fuhu.com"

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Copy project files
#VOLUME . /app
COPY . /app

# Install app dependencies
RUN npm install --production

# Bundle app source
#RUN npm run build

EXPOSE 9000
CMD [ "node", "server" ]