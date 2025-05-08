import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import route from './routers'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(route)
app.mount('#app')
