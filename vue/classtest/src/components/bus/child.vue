<template>
  <div>
      <div>这里是a</div>
      <button @click="fn">点击</button>
  </div>
  
</template>

<script>

import bus from "../../tool/bus"
import centetData from "../../tool/centetData"
export default {
  name: 'aa',
  data(){
    return {
      msg:"来自子组件"
    }
  },
  methods: {
      fn(){
        // bus.$emit("up",this.msg)
        centetData.$emit("up",{msg:this.msg})
      }

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
