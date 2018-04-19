<template>
  <div>
      <div>这里是parent</div>
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
  methods: {
      

  },

  computed: {
    // ...mapState([
    //   "num"
    // ])
    ...mapState({
       nums:(state)=>{
         console.log(state)
        return state.tm.num+"$"
        }
    })
  },
  components:{
    child
  }
  


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
