# NovaProxy Landing Page

一个可直接部署的 IP 代理服务官网与产品流程演示。项目不依赖构建工具，适合 GitHub Pages、Cloudflare Pages、Netlify 等静态托管平台。

## 项目结构

```text
.
├── index.html      # 页面结构与 SEO 元数据
├── styles.css      # 响应式视觉样式
├── app.css         # 账户、支付与控制台样式
├── app.js          # 浏览器端演示数据与公共交互
├── auth.html       # 登录与注册
├── pricing.html    # 套餐选择
├── checkout.html   # 模拟支付
├── dashboard.html  # 订单、个人中心与代理提取控制台
├── script.js       # 首页套餐计算与交互反馈
├── .nojekyll       # 避免 GitHub Pages 处理静态资源
└── .gitignore
```

## 本地预览

用任意静态文件服务器在项目根目录启动即可。例如：

```bash
python3 -m http.server 8080
```

然后访问 `http://localhost:8080`。

## GitHub Pages 部署

1. 将项目推送到 GitHub 的 `main` 分支。
2. 在仓库的 **Settings → Pages** 中，将发布源设为 **Deploy from a branch**。
3. 选择 `main` 分支与 `/(root)` 文件夹并保存。
4. 发布地址将是 `https://<GitHub 用户名>.github.io/<仓库名>/`。

本项目使用相对路径引用资源，因此可在仓库子路径下正常运行。

## 演示功能

- 本地账户注册、登录与退出
- 套餐选择、模拟支付与订单记录
- 个人资料、演示 API 密钥与代理端点生成

所有演示数据保存在当前浏览器的 `localStorage` 中；清除浏览器数据后将重置。

## 说明

- 该项目没有真实的用户认证、支付扣款或代理开通能力；生成的代理端点仅作界面演示。
- 生产上线前需接入后端服务、数据库、支付网关、真实代理 API 与安全审计，并替换演示文案、价格和联系渠道。
