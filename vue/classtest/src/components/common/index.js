import Vue from "vue"

let head=Vue.extend({
    data(){
      return {
        name:"123"
      }
    },
    template:"<div>{{name}}</div>"
})

let tab=Vue.extend({
  data(){
    return {
      age:12
    }
  },
  // props:["name"],
  // data:{
  //   age:12
  // },
  template:"<div><p>{{age}}</p><button @click='changeHandle'>点击</button></div>",
  methods: {
      changeHandle(){
        this.age++
      }
  }
})





Vue.component("Head",head)
Vue.component("Tab",tab)