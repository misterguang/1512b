<template>
   <span>a{{msg}}</span>

   
</template>
    
    <script>
    export default {
      name: 'tab1',
      data () {
        return {
           msg:""
          }
      },
      mounted(){
        console.log("a")
        this.msg=Math.floor(Math.random()*100)
      },
      activated(){
        console.log("aa")
      }
     
     
    
    } 
    </script>
    
    <style scoped>
    
    </style>
    