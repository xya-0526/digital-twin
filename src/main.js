import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import route from './routers'
import { initRem } from './utils/useRem'
// 初始化rem适配
initRem()
const app = createApp(App)
app.use(route)
app.mount('#app')
