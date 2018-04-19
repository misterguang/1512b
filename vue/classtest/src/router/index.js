import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import list from '@/components/list'
import detail from '@/components/detail'
import computed from '@/components/computed'
import fordemo from '@/components/fordemo'
import slot from '@/components/slot'
import compParent from '@/components/compParent'
import derective from '@/components/derective'
import detail1 from '@/components/detail1'
import a from '@/components/a'
import b from '@/components/b'
import detail2 from '@/components/detail2'
import parent from '@/components/bus/parent'
import parent2 from '@/components/bus/parent2'
import vuex_parent from '@/components/vuex/parent'
import TM_parent from '@/components/TM/parent'
import ZFB_parent from '@/components/ZFB/parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/computed',
      name: 'computed',
      component: computed
    },
    {
      path: '/fordemo',
      name: 'fordemo',
      component: fordemo
    },
    {
      path: '/slot',
      name: 'slot',
      component: slot
    },
    {
      path: '/compParent',
      name: 'compParent',
      component: compParent
    },
    {
      path: '/derective',
      name: 'derective',
      component: derective
    },
    {
      path: '/detail1',
      name: 'detail1',
      component: detail1
    },
    {
      path: '/a',
      name: 'a1',
      component: a
    },
    {
      path: '/b',
      name: 'b1',
      component: b
    }, 
    {
      path: '/detail2/:id',
      name: 'detail2',
      component: detail2,
      beforeEnter(to,from,next){
        console.log("beforeEnter")
          next()
      }
    },
    {
      path: '/parent',
      name: 'parent',
      component: parent
    }, 
    {
      path: '/parent2',
      name: 'parent2',
      component: parent2
    }, 
    {
      path: '/vuex_parent',
      name: 'vuex_parent',
      component: vuex_parent
    },
    {
      path: '/TM_parent',
      name: 'TM_parent',
      component: TM_parent
    },
    {
      path: '/ZFB_parent',
      name: 'ZFB_parent',
      component: ZFB_parent
    },
  ]
})
