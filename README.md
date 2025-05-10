# 数字孪生项目 (Digital Twin)

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 项目简介

数字孪生项目是一个基于 Vue.js 和 Element Plus 的现代化 Web 应用，旨在提供高效的数字孪生解决方案。通过实时数据监控、3D 可视化和智能分析，帮助用户更好地理解和管理实体对象的数字映射。

## 功能特点

- 实时数据监控与分析
- 3D 模型可视化展示
- 智能预测与异常检测
- 多维数据展示与交互
- 响应式设计，支持多种设备访问

## 技术栈

- **前端框架**：Vue.js 3.x
- **UI 组件库**：Element Plus
- **路由管理**：Vue Router
- **HTTP 客户端**：Axios
- **数据可视化**：ECharts
- **构建工具**：Vite
- **代码规范**：ESLint + Prettier
- **Git 钩子**：Husky + lint-staged

## 开发环境要求

- Node.js 18.20.8
- npm 9.x

## 安装与运行

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

### 测试环境构建

```bash
npm run test
```

### 生产环境构建

```bash
npm run build
```

### 预览构建结果

```bash
# 开发环境预览
npm run preview:dev

# 测试环境预览
npm run preview:test

# 生产环境预览
npm run preview:prod
```

## 项目结构

```
digital-twin/
├── .github/            # GitHub 相关配置
├── .vscode/            # VS Code 配置
├── public/             # 静态资源
├── src/                # 源代码
│   ├── assets/         # 资源文件
│   ├── components/     # 组件
│   ├── router/         # 路由配置
│   ├── services/       # API 服务
│   ├── store/          # 状态管理
│   ├── utils/          # 工具函数
│   ├── views/          # 页面视图
│   ├── App.vue         # 根组件
│   └── main.js         # 入口文件
├── .env.development    # 开发环境变量
├── .env.production     # 生产环境变量
├── .env.test           # 测试环境变量
├── .eslintrc.js        # ESLint 配置
├── .prettierrc.js      # Prettier 配置
├── vite.config.js      # Vite 配置
└── package.json        # 项目配置
```

## 代码规范

本项目使用 ESLint 和 Prettier 进行代码规范检查和格式化，使用 Husky 和 lint-staged 确保提交前代码符合规范。

```bash
# 运行代码检查
npm run lint

# 自动修复代码格式问题
npm run lint:fix

# 格式化代码
npm run format
```

## 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 许可证

本项目基于 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 联系方式

如有任何问题或建议，请通过 [issues](https://github.com/codepaintstudio/digital-twin/issues) 与我们联系。
