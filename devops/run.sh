#!/bin/sh

(echo "upstream yadgateway { server $YAD_GATEWAY_URL; }" && cat /etc/nginx/conf.d/nginx-default.template) > nginx-default.conf

mv nginx-default.conf /etc/nginx/conf.d/default.conf
nginx -g 'daemon off;'
