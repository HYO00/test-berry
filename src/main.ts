import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VNetworkGraph from "v-network-graph"
import App from './App.vue'
import router from './routes/index'
import ElementPlus from 'element-plus'
import './style.css'
import 'element-plus/dist/index.css'
import "v-network-graph/lib/style.css"

const app = createApp(App)
const pinia = createPinia()

app.use(ElementPlus).use(router).use(pinia).use(VNetworkGraph)
app.mount('#app')
