<template>
  <div>
      <div>{{name}}</div>
      <img src="/static/logo.png" alt="">
  </div>
      
</template>
<script>
  export default{
      data(){
        return {name:"zhangsan"}
      }
  }
</script>
<style scoped>
  div{
    font-size: 50px;
  }
</style>