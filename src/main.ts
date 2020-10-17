import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Reset HTML element styles
import "normalize.css";
// Style Base
import "@/assets/css/common.less";
// Awesome Icons Pro
import "@fortawesome/fontawesome-free/css/all.css";

// Create Root Instance
createApp(App).use(store).use(router).mount('#app')
