import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import route from './routers'
import { PxtoRem } from './utils'


const app = createApp(App)
PxtoRem()
app.use(route)
app.mount('#app')
