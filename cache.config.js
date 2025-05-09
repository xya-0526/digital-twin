/**
 * 缓存策略配置
 * 用于前端资源的缓存优化
 */
export default {
  // 静态资源缓存配置
  staticAssets: {
    // 图片、字体等静态资源缓存时间（单位：秒）
    maxAge: 30 * 24 * 60 * 60, // 30天
    // 是否添加强缓存标识
    immutable: true,
  },
  // HTML和JavaScript文件缓存配置
  appAssets: {
    // HTML、JS、CSS等应用资源缓存时间（单位：秒）
    maxAge: 60 * 60, // 1小时
    // 是否添加强缓存标识
    immutable: false,
  },
  // API请求缓存配置
  apiCache: {
    // 默认缓存时间（单位：毫秒）
    defaultTTL: 5 * 60 * 1000, // 5分钟
    // 是否启用请求合并（防止短时间内重复请求）
    deduplication: true,
    // 是否启用离线缓存
    offlineCache: true,
    // 自定义缓存键生成函数
    cacheKeyGenerator: (config) => {
      const { url, method, params, data } = config;
      return `${method}:${url}:${JSON.stringify(params || {})}:${JSON.stringify(data || {})}`;
    },
  },
  // 预加载配置
  preload: {
    // 是否启用关键资源预加载
    enable: true,
    // 预加载资源类型
    resourceTypes: ['script', 'style', 'font'],
  }
}
