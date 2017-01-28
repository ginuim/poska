// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import global from './global'

Vue.use(global)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store: store,
  router: router,
  components: { App }
})
