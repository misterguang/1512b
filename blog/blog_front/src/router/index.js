import vueRouter from "vue-router"

import Vue from "vue"
Vue.use(vueRouter)


let index=resolve => require(['@/components/index.vue'], resolve)
let loading=resolve => require(['@/components/loading.vue'], resolve)
let list=resolve => require(['@/components/list.vue'], resolve)
let detail=resolve => require(['@/components/detail.vue'], resolve)



export default new vueRouter({
   routes:[
     {
       path:"/",
       redirect: "/index/list"
     },
     {
      path:"/index",
      component:index,
      children:[
        {
          path:"list",
          component:list,
        },
        {
          name:"detail",
          path:"detail",
          component:detail,
        }
      ]
    },
    {
      path:"/loading",
      component:loading,
    }
    
   ]
})