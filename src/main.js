import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import VueAnimateNumber from 'vue-animate-number'
import './base.css'
import './permission'

Vue.config.productionTip = false
Vue.use(ElementUI).use(VueAnimateNumber)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
