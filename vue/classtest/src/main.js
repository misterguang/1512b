// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import centetData from "./tool/centetData"


Vue.config.productionTip = false
import "./components/common"
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  console.log("beforeEach")
  next()
})


import vuex from "vuex"
Vue.use(vuex)

Vue.use(centetData)
import store from "./store/index"

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
