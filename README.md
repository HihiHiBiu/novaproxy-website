# NovaProxy Landing Page

一个可直接部署的静态 IP 代理服务官网。项目不依赖构建工具，适合 GitHub Pages、Cloudflare Pages、Netlify 等静态托管平台。

## 项目结构

```text
.
├── index.html      # 页面结构与 SEO 元数据
├── styles.css      # 响应式视觉样式
├── script.js       # 套餐计算与交互反馈
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

## 说明

- 该项目是静态展示站，不包含真实代理开通、支付、用户认证或 API 请求能力。
- 上线前请替换演示文案、价格、品牌信息以及实际的联系渠道。
