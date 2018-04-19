<template>
  <div>
      <div>这里是parent</div>
      <p>{{numHandle}}</p>
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
       nums:(state)=>state.num+"$"
    }),
    ...mapGetters([
        "numHandle"
    ])
  },
  components:{
    child
  }
  


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
