FROM node:6-alpine

ADD package.json /app

RUN cd /app; npm install
RUN cd /app; npm run build:ssr

ADD dist /app/dist

ENV NODE_ENV production
ENV PORT 8080
EXPOSE 8080

WORKDIR "/app"
CMD [ "npm", "start" ]