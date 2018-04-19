<template>
  <div>
      <div v-child3d>{{msg}}</div>
      <button @click="fn">点击3</button>
  </div>
   
</template>
<script>

    export default {
      data(){
        return {msg:"child3"}
      },
      directives:{
         child3d:{
            bind(){
              console.log("bind-child3")
            },
            inserted(){
              console.log("inserted-child3")
            },
            update(){
              console.log("updated-child3")
            },
            componentUpdated(){
              console.log("componentUpdated-child3")
            }
         }
      },
      methods: {
        fn(){
          this.msg="lisi"
        }
      }
    }
</script>