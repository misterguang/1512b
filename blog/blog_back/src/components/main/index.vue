<template>
  <div >
    <headerC></headerC>
    <div class="main">
      <asideC class="left"></asideC>
      <router-view class="right"></router-view>
    </div>
  </div>
</template>

<script>

  
export default {
  name: 'back_index',
  data () {
    return {
		
    }
  },
  methods:{
      
  },
  mounted () {
    // fetch("http://localhost:9999/api/back/class/test",{
    //     method:"post",
    //     headers:new Headers({
    //       "Content-type":"application/json",
    //     }),
    //     body:JSON.stringify({name:22,age:24})
    // }).then((data)=>{
    //   console.log(data)
    // })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  overflow: hidden
}
.main .left{
  float: left
}
.main .right{
  float: left;

}
</style>
