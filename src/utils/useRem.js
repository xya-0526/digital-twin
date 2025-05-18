/**
 * @typedef {Object} RemUtils
 * @property {(px: number) => string} pxToRem - Convert px to rem
 * @property {() => number} getScale - Get current scale ratio
 */

// 基准宽度
const BASE_WIDTH = 5120;
// 基准rem值（10px = 1rem）
const BASE_REM = 10;

/**
 * Initialize rem adaptation
 * @returns {RemUtils} Rem utility functions
 */
export function initRem() {
  const setRem = () => {
    // 获取当前视窗宽度
    const currentWidth = document.documentElement.clientWidth || document.body.clientWidth;
    // 计算当前rem值
    const remSize = (currentWidth / BASE_WIDTH) * BASE_REM;
    // 设置根元素字体大小
    document.documentElement.style.fontSize = remSize + 'px';
  };

  // 首次加载设置
  setRem();

  // 监听窗口变化
  window.addEventListener('resize', setRem);
  // 监听手机旋转
  window.addEventListener('orientationchange', setRem);

  return {
    // 提供px转rem的工具函数
    pxToRem(px) {
      return `${px / BASE_REM}rem`;
    },
    // 提供获取当前缩放比例的函数，用于echarts等需要px单位的场景
    getScale() {
      const currentWidth = document.documentElement.clientWidth || document.body.clientWidth;
      return currentWidth / BASE_WIDTH;
    }
  };
}
