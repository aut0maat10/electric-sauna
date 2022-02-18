import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueGtag from "vue-gtag";

// var Vue = require('vue');
// var VueScrollTo = require('vue-scrollto');

// Vue.use(VueScrollTo)

createApp(App).use(VueGtag, {
  config: { id: process.env.GOOGLE_ANALYTICS_ID }
}).mount('#app')
