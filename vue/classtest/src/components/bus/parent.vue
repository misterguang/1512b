<template>
  <div>
      <child></child>
  </div>
  
</template>

<script>
  import bus from "../../tool/bus"
  import child from "./child"
export default {
  name: 'aa',
  data(){
    return {}
  },
  created(){
      // bus.$on("up",(data)=>{
      //   console.log(data)
      // })
  },
  components: {
    child
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
