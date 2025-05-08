import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ['VITE_', 'NODE_'])

  return {
    plugins: [vue()],
    server: {
      port: 3666,
    },
    build: {
      outDir: `dist/${env.VITE_APP_ENV || 'production'}`,
      assetsDir: 'static',
      minify: 'esbuild',
      emptyOutDir: true 
    },
  }
})