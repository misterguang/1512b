import vueRouter from "vue-router"

import Vue from "vue"
Vue.use(vueRouter)


let Login=resolve => require(['@/components/login.vue'], resolve)
let backMain=resolve => require(['@/components/main/main.vue'], resolve)
let back=resolve => require(['@/components/main/index.vue'], resolve)
let add_one_class=resolve => require(['@/components/class/add_one_class.vue'], resolve)
let add_two_class=resolve => require(['@/components/class/add_two_class.vue'], resolve)
let classList=resolve => require(['@/components/class/classList.vue'], resolve)
let amend_class=resolve => require(['@/components/class/amend_class.vue'], resolve)

let add_article=resolve => require(['@/components/article/add_article.vue'], resolve)
let article_list=resolve => require(['@/components/article/article_list.vue'], resolve)
let amend_article=resolve => require(['@/components/article/amend_article.vue'], resolve)
let api_add=resolve => require(['@/components/api/api_add.vue'], resolve)
let api_list_detail=resolve => require(['@/components/api/api_list_detail.vue'], resolve)
let api_list=resolve => require(['@/components/api/api_list.vue'], resolve)

export default new vueRouter({
   routes:[
     {
       path:"/",
       component:Login,
       redirect: "/login"
     },
     {
      path:"/login",
      component:Login
     },
     {
      path:"/back",
      component:back,
      children:[
        {
          path:"main",
          component:backMain
        },
        {
          path:"add_one_class",
          component:add_one_class
        },
        {
          path:"add_two_class",
          component:add_two_class
        },
        {
          path:"class_list",
          component:classList
        }, 
        {
          path:"amend_class",
          component:amend_class
        },
        {
          path:"add_article",
          component:add_article
        }, 
        {
          path:"article_list",
          component:article_list
        },
        {
          path:"amend_article/:id",
          component:amend_article
        },
        {
          path:"api_add",
          component:api_add
        },
        {
          path:"api_list_detail",
          component:api_list_detail
        },
        {
          path:"api_list",
          component:api_list
        }
      ]
     }
   ]
})