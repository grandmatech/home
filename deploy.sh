#!/bin/bash


if [ "$1" == "proxy" ]; then  # ./deploy.sh proxy 运行时
    proxy_ip='http://127.0.0.1:7890'
    git config --global http.proxy $proxy_ip  # 设置 git 代理
    git config --global https.proxy $proxy_ip
    yarn config set proxy $proxy_ip  # 设置 yarn 代理
    yarn config set https-proxy $proxy_ip
fi

git add -A && git commit -m "first deploy" && git push -u origin main

# GIT_USER=grandmatech GIT_USER_NAME=grandmatech GIT_USER_EMAIL=grandmatech@126.com yarn deploy  # 自动部署到 github page
USE_SSH=true yarn deploy


if [ "$1" == "proxy" ]; then
    git config --global --unset http.proxy  # 取消 git 代理
    git config --global --unset https.proxy
    yarn config delete proxy  # 取消 yarn 代理
    yarn config delete https-proxy
fi
