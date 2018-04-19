<template>
<main>
    
  <p>{{msg.name}}</p>
  
</main>
</template>

<script>

import {center} from "../tool/centetData"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:null
    }
  },
  created(){
    console.log("created") 
    this.msg=this.center.data
 
  },
  
  beforeRouteEnter(to,from,next){
   console.log("beforeRouteEnter")
   setTimeout(()=>{
      center.$emit({name:"zhangsan"})

      next((vm)=>{
        console.log("vm")
      })
    },2000)
    
  }
  
  
 

  


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
