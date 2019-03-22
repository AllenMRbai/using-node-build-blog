# 学习《慕课网课程 Node.js 从零开发 web server 博客项目》的练习项目

## 起步

start Vue project

```bash
npm run start:vue
```

build Vue project

```bash
npm run build:vue
```

start node server in development environment

```bash
npm run dev
```

start node server in production environment

```bash
npm run prod
```

## 项目简介

该项目按照课程的进度一步步搭建，并在每个重要的节点打上了 `tag`方便回顾与查看。

该课程侧重于服务端的知识，老师提供的前端 web 页面有点简单。生为设计出身的前端，打算用前端框架将老师的 web 页面重构一遍。

项目内容包括`node`服务和`Vue`单页应用。

- `node`服务的代码分别用`Node.js`,`Express`,`Koa`实现了一遍。并以不同的版本号发布。

- `Vue`单页应用包括封装的基础组件（比较简陋的那种），组件文档，博客项目。`Vue`单页应用使用 webpack 打包。

## 项目目录

```
|- bin          # 里面放了node服务的入口
|- documents    # Vue 组件文档markdown文件
|- script       # 构建脚本
|- src          # node 服务代码
|- test         # 练习的代码目录，并不是测试文件夹
|- view         # Vue 项目的输出目录
|- viewSrc      # Vue 项目源码
```
