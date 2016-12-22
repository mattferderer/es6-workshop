FROM kkarczmarczyk/node-yarn
RUN pwd
COPY workshop-files /workspace/es6-workshop
WORKDIR /workspace/es6-workshop
RUN npm install -g nodemon
RUN pwd
RUN ls -la
RUN ls -la
RUN yarn run setup

CMD yarn run test:watch