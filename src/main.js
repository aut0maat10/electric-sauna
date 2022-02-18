import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueGtag from "vue-gtag";

// var Vue = require('vue');
// var VueScrollTo = require('vue-scrollto');

// Vue.use(VueScrollTo)
console.log(process.env.VUE_APP_GOOGLE_ANALYTICS_ID)
createApp(App).use(VueGtag, {
  config: { id: process.env.VUE_APP_GOOGLE_ANALYTICS_ID }
}).mount('#app')
