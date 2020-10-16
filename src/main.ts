import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Reset HTML element styles
import "normalize.css";
// Awesome Icons Pro
import "@fortawesome/fontawesome-free/css/all.css";

createApp(App).use(store).use(router).mount('#app')
