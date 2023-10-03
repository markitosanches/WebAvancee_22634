import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import './assets/css/styles.css'

createApp(App).use(router).mount('#app')
