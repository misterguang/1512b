<template>
   <span>b{{msg}}</span>
</template>
    
    <script>
    export default {
      name: 'tab2',
      data () {
        return {
           msg:""
          }
      },
      mounted(){
        console.log("b")
        this.msg=Math.floor(Math.random()*100)
      },
      activated(){
        console.log("bb")
      }
    
    } 
    </script>
    
    <style scoped>
    
    </style>
    