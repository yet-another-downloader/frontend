# ---- Base Node ----
FROM node:8-alpine AS base
RUN apk add --no-cache  tini && mkdir -p /root/frontend

WORKDIR /root/frontend

# Set tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]

# ---- Dependencies ----
FROM base AS build-frontend-all

COPY ./ /root/frontend/

# install node packages
RUN npm set progress=false && npm config set depth 0

RUN npm i @types/node --global

# build UI
RUN cd /root/frontend && npm install && npm run build

# Окончательный образ
# ---- Release ----

from nginx AS release
COPY --from=build-frontend-all /root/frontend/dist/ /opt/yad/static-ui/

ADD devops/nginx-default.conf /etc/nginx/conf.d/nginx-default.template
ADD devops/run.sh /run.sh
CMD bash /run.sh
