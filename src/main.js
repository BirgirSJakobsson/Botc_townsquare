import './assets/main.css'

import { createApp } from 'vue'
// Look into Pinia
import { createPinia } from 'pinia'
import App from './App.vue'



const app = createApp(App).use(createPinia())
app.mount('#app')
