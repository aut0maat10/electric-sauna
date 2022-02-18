import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueGtag from "vue-gtag";

createApp(App).use(VueGtag, {
  config: { id: 'G-6S1NH6Y9FY'}
}).mount('#app')
