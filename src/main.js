import './assets/main.css'

import {createApp} from 'vue';
import App from './App.vue';
import VueSocketIO from 'vue-socket.io';

Vue.config.productionTip = false;

Vue.use(new VueSocketIO({
  connection: 'http://localhost:3000'
}));

const app = createApp(App)
app.mount('#app')