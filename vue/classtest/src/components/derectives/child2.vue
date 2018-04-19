<template>
    <div>
        <child3 v-child2d></child3>
        <!-- <p ></p> -->
    </div>
</template>
<script>
      import child3 from "./child3"
    export default {
      data(){
        return {msg:"child2"}
      },
      directives:{
         child2d:{
            bind(){
              console.log("bind-child2")
            },
            inserted(){
              console.log("inserted-child2")
            },
            update(){
              console.log("updated-child2")
            },
            componentUpdated(){
              console.log("componentUpdated-child2")
            }
         }
      },
      components: {
        child3
      }
    }
</script>