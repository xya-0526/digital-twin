/**
 * 用于配置构建压缩选项
 * 注意：此配置文件需要安装 vite-plugin-compression 插件才能生效
 * 可以通过 npm install --save-dev vite-plugin-compression 安装
 */
export default {
  // gzip压缩配置
  gzip: {
    // 是否启用
    enable: true,
    // 压缩后删除源文件
    deleteOriginFile: false,
    // 压缩阈值，单位kb
    threshold: 10240,
    // 压缩算法级别
    algorithm: 'gzip',
    // 压缩后的文件格式
    ext: '.gz',
  },
  // brotli压缩配置
  brotli: {
    // 是否启用
    enable: true,
    // 压缩后删除源文件
    deleteOriginFile: false,
    // 压缩阈值，单位kb
    threshold: 10240,
    // 压缩算法级别
    algorithm: 'brotliCompress',
    // 压缩后的文件格式
    ext: '.br',
  }
}
