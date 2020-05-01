FROM node:10-alpine

ARG PORT=5200

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy app source
COPY . /usr/src/app
RUN npm install
RUN npm run build

EXPOSE ${PORT}
CMD [ "npm", "start" ]
