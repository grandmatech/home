# git

- 同一个电脑设第二个用户
- `~/.ssh/config`

```bash

# vscode 推送 github 设置 grandmatech
Host github-grandmatech
    HostName github.com
    User grandmatech
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/grandmatech
    IdentitiesOnly yes
    ServerAliveInterval 300
    ServerAliveCountMax 10
    Port 443


# 自行 推送 github 设置
# git remote set-url origin git@github-grandmatech:grandmatech/home.git
# ssh -T git@github.com-grandmatech
Host github.com-grandmatech
    HostName ssh.github.com
    User grandmatech
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/grandmatech
    IdentitiesOnly yes
    Port 443

```

- 必须在本文件夹中设置单独的`user.name`和`user.email`

```bash
git init && git config user.name "grandmatech" && git config user.email "grandmatech@126.com" 
git remote add origin git@github.com-grandmatech:grandmatech/home.git
git add -A && git commit -m "Initial commit" && git branch -M main
git push -f origin main


git add -A && git commit -m "update" && git push -u origin main
```

# yarn
```bash
# yarn add -D tailwindcss postcss autoprefixer

yarn add --dev tailwindcss@^3 postcss autoprefixer docusaurus-tailwindcss
yarn upgrade @docusaurus/core@latest @docusaurus/plugin-content-docs@latest @docusaurus/preset-classic@latest @docusaurus/module-type-aliases@latest @docusaurus/tsconfig@latest @docusaurus/types@latest
yarn add @docusaurus/plugin-content-docs
yarn add @docusaurus/theme-mermaid
yarn add @docusaurus/plugin-sitemap
# tailwindcss 必须为 3.x 版本, 否则以下命令会报错
npx tailwindcss init -p

```

# banner-generator

https://coolbackgrounds.io
https://github.com/qrohlf/trianglify

```bash
#yarn add trianglify


```

https://mycolor.space/?hex=%2313CCCE&sub=1

https://cssgradient.io/gradient-backgrounds/
