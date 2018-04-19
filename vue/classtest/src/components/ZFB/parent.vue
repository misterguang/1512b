<template>
  <div>
      <div>这里是支付宝parent</div>
      <p>{{nums}}</p>
      <child></child> 
  </div>
  
</template>

<script>
  import child from "./child"
  import {mapState,mapGetters} from "vuex"
export default {
  name: 'parent',
  data(){
    return {
      num:""
    }
  },
  
  computed: {
   
    ...mapState({
       nums:(state)=>state.zfb.num+"$支付宝"
    }),
    
  },
  components:{
    child
  }
  


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
