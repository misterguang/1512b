<template>
<main>
    
  <p>{{msg}}</p>
  
</main>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: null
    }
  },
  mounted () {
    // this.msg=this.$route.query.name
    this.msg=this.$route.params.name
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
