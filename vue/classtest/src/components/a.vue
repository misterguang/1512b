<template>
  <div>
      <div>这里是a</div>
      <button @click="fn">点击</button>
  </div>
  
</template>

<script>
export default {
  name: 'aa',
  data(){
    return {}
  },
  methods: {
      fn(){
        //  this.$router.push("/b")
        this.$router.replace("/b")
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
