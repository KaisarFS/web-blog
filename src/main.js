// import { createApp } from 'vue'
// import { createStore } from 'vuex'

// import App from './App.vue'
// // import store from './storage'

// import router from './router'
// // import { loadScript } from "vue-plugin-load-script";

// const app = createApp(App)
// // Vue.loadScript("../public/gradient")

// app.use(router)
// // app.use(store)

// app.mount('#app')


import { createApp } from 'vue'
// import { createStore } from 'vuex'

import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
