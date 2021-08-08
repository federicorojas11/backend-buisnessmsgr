FROM node:14-alpine3.10 As development

WORKDIR /

COPY package*.json ./

RUN npm install --only=development

COPY . .


FROM node:14-alpine3.10 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /dist ./dist

CMD ["node", "dist/main"]
