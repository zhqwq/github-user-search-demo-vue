import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 创建 vm
const app = createApp(App)

// 使用 ElementPlus 插件以获得自定义组件
app.use(ElementPlus)
app.mount('#app')
