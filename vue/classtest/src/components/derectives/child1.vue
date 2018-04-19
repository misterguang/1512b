<template>
  <div> 
      <div >{{msg}}</div>
      <button @click="fn">点击</button>
      <child2 v-child1d></child2>
  </div>
    
</template>
<script>
    import child2 from "./child2"
    export default {
      data(){
        return {msg:"child1"}
      },
      directives:{
         child1d:{
            bind(){
              console.log("bind-child1")
            },
            inserted(){
              console.log("inserted-child1")
            },
            update(){
              console.log("updated-child1")
            },
            componentUpdated(){
              console.log("componentUpdated-child1")
            }
         }
      },
      methods: {
          fn(){
            this.msg="lisi"
          }
      },
      components: {
        child2
      }
    }
</script>