import '../css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'


// Look into Pinia
//https://pinia.vuejs.org/core-concepts/
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
