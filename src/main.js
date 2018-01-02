import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/base/iconfont/iconfont.css'
import './assets/base/border.css'
import './assets/base/reset.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
