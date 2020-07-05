import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//外部样式引用

// Vue.baseURL='http://localhost:3000'
Vue.baseURL='http://api.xiawx.top'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
