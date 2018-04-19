<template>
<main>
    <Head></Head>
    <Tab name="aa"></Tab>
    <Tab></Tab>
  <p>{{msg}}</p>
  <!-- <router-link :to="{path:'/detail',query:{name:2}}">跳到2</router-link> -->

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
  methods: {
      fn(){
        console.log(22)
      }

  },
  beforeCreate(next){
    // console.log(this)
    console.log(this.fn)
    this.$nextTick(()=>{
      console.log(this.msg)
    })
  },
  created(){
    console.log(this.fn)
  },
  mounted(){
    // console.log(this.$route.query)
    console.log(this.$router)
    console.log(this.$route)
    this.msg=this.$route.query.name
  },

  watch:{
      $route(){
        console.log(this.$route.query.name)
        this.msg=this.$route.query.name
      }
  },
 
 

  


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
