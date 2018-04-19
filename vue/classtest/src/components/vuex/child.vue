<template>
  <div>
      <div>这里是child</div>
      <button @click="fn">点击</button>
  </div>
 
</template>

<script>

  import {mapActions,mapMutations} from "vuex"

export default {
  name: 'child',
  data(){
    return {

    }
  },

  methods: {
      
    ...mapActions([
      "addnum_A"
    ]),
    ...mapMutations([
      "addnum_M"
    ]),
    fn(){
      this.addnum_A(5)
      // this.addnum_M(5)
      console.log(this)
      // this.$store.commit("addnum_M",4)
    }
  }
 
  


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
