<template>
   <span>c{{msg}}</span>
</template>
    
    <script>
    export default {
      name: 'tab3',
      data () {
        return {
           msg:""
          }
      },
      mounted(){
        console.log("c")
        this.msg=Math.floor(Math.random()*100)
      },
      activated(){
        console.log("cc")
      }
     
    
    } 
    </script>
    
    <style scoped>
    
    </style>
    