import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/style.css'
import App from './App.vue';
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
