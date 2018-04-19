<template>
<main>
  <template v-for="i in list">
      <!-- <router-link :to="{name:'detail1',params:{name:i}}" tag="div"><p>{{i}}</p></router-link> -->
      <router-link :to="{path:'/detail2/'+i}" tag="div"><p>{{i}}</p></router-link>
  </template>
  
</main>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list:[
        1,2,3,4
      ]
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
   
    this.msg=this.$route.params.id
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
