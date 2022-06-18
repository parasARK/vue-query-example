import { createApp } from 'vue'
import { VueQueryPlugin } from 'vue-query'
import router from '@/router'
import App from './App.vue'

import '@/styles/index.css'

createApp(App).use(router).use(VueQueryPlugin).mount('#app')
