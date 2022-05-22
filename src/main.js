import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './index'
import 'bootstrap/dist/css/bootstrap.min.css'

// vue.config.productionTip = false

createApp(App).use(router).use(store).mount('#app')

