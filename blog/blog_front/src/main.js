
import Vue from "vue"

import router from "./router"
import store from "./store"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from "axios"

function installaxios(){
  return {
    install(vm){
        vm.prototype.axios=axios
    }
  }
}

Vue.use(installaxios())


// router.beforeEach((to,from,next)=>{
 
//       if(to.path!="/loading"){
//         console.log(to.query.pageData)
//         if(!(to.query.pageData&&store.state[to.query.pageData])){
//           next({path:"/loading",query:{url:to}})
//         }else{
//           next()
//         }
//       }else{
//         next()
//       }
   
// })


new Vue({
  el:"#root",
  template:"<app />",
  router,
  store,
  components: {
      app: resolve => require(['./components/app.vue'], resolve)
  }
})