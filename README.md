# 个人名片页 · 起点模板

React + Vite 做的单页个人名片，部署在 GitHub Pages，全部免费。
改内容只改 `src/App.jsx` 一个文件；改完 push 到 GitHub，自动上线。

## 这个仓库

- 仓库：`kangxuemin1101-prog/Vivian.github.io`（公开仓库）
- 上线地址：https://kangxuemin1101-prog.github.io/Vivian.github.io/
- 发布方式：GitHub Actions（`.github/workflows/deploy.yml`），每次 push 到 main 分支自动构建发布

## 准备工作（只做一次）

1. 有一个 GitHub 账号（已注册：kangxuemin1101-prog）
2. 安装 Node.js LTS：https://nodejs.org（装 LTS 版本）
3. 安装 Git：https://git-scm.com
4. 安装编辑器：VS Code 或 TRAE（都行，TRAE 自带 AI，改起来更方便）

## 本地运行

```bash
git clone https://github.com/kangxuemin1101-prog/Vivian.github.io.git
cd Vivian.github.io
npm install   # 只需要第一次运行
npm run dev   # 启动后按提示打开浏览器地址，就能看到页面
```

改代码保存后，浏览器会自动刷新。

## 改成你自己的内容

打开 `src/App.jsx`，找到标着「改这里」的注释：

- `profile`：名字、职业、一句话介绍、邮箱、微信号
- `links`：你要放的链接，不需要的行删掉
- `about`：关于我的几条

样式（颜色、间距）在 `src/App.css` 里。

提醒：公开页面不建议直接放真实微信号，容易被骚扰。可以只放邮箱，或者放一张微信二维码图片（把图片放进 `public/` 文件夹，在页面里引用）。

## 开启 Pages（只做一次）

1. 打开仓库的 Settings → Pages → Source 选 "GitHub Actions"
2. 等一两分钟，打开 https://kangxuemin1101-prog.github.io/Vivian.github.io/ 就能看到你的页面

## 以后改动

改代码 → `git add .` → `git commit -m "改了什么"` → `git push`，GitHub 会自动重新上线，不用再碰任何设置。

## 常见问题

- `npm install` 很慢：换国内镜像 `npm config set registry https://registry.npmmirror.com`，再重新 install
- GitHub 打开很慢：换个代理节点再试
- 部署后页面空白：等两分钟再刷新；还不行就去仓库的 Actions 页面看构建日志，把报错发给 AI 助手