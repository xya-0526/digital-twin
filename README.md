# 数字孪生大屏项目

## 项目简介

本项目是一个基于 Vue 3 开发的数字孪生大屏展示系统，采用 5120x1440 像素的超宽屏幕分辨率设计，用于展示数据可视化内容。

## 技术栈

- **前端框架**：Vue 3 + Vite
- **UI 组件库**：Element Plus
- **数据可视化**：ECharts 5
- **开发语言**：JavaScript/Vue
- **样式处理**：SCSS
- **构建工具**：Vite 6
- **代码规范**：ESLint + Prettier

## 特性

- 📱 响应式设计：采用 AutoFitScreen 和 PxToRem, RemToPx 实现自适应布局
- 🎨 统一的样式管理：使用 SCSS 预处理器，实现样式模块化
- 📊 丰富的图表组件：基于 ECharts 实现多样化的数据可视化展示
- 🛠 现代化开发工具链：ESLint 代码检查、Prettier 代码格式化

## 项目结构

```
├── src/
│   ├── assets/         # 静态资源
│   ├── components/     # 公共组件
│   ├── router/         # 路由配置
│   ├── server/         # API 接口
│   ├── styles/         # 全局样式
│   ├── utils/          # 工具函数
│   └── view/           # 页面组件
├── public/            # 公共静态资源
└── vite.config.js    # Vite 配置文件
```

## 开发环境

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 部署说明

项目提供了三种部署模式：

- 开发环境：`npm run dev`（端口 3000）
- 测试环境：`npm run test`（端口 4000）
- 生产环境：`npm run build`（端口 4173）

## 屏幕适配方案

项目采用固定尺寸设计（5120x1440），并通过以下方案实现屏幕适配：

1. 使用 `screen.scss` 设置固定大小的容器
2. 在 Vite 配置中集成单位转换插件，无需手动修改组件代码
3. 采用固定尺寸布局，确保显示效果的一致性

## 代码规范

项目使用 ESLint 和 Prettier 进行代码规范化，并通过 husky 和 lint-staged 在提交代码时自动进行代码检查和格式化。

```bash
# 运行代码检查
npm run lint

# 自动修复代码格式
npm run format
```
