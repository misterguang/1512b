<template>
    <div>
        parent2
    </div>
    
  </template>
  
  <script>
    // import bus from "../../tool/bus"
    import centetData from "../../tool/centetData"
  export default {
    name: 'aa',
    data(){
      return {}
    },
    created(){
        // bus.$on("up",(data)=>{
          

        // })
        console.log(centetData.data.msg)
    },
    destroyed(){
      // bus.$destroy("up")
    }

    
  
  
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  