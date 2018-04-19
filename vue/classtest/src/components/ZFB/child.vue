<template>
  <div>
      <div>这里是child</div>
      <button @click="fn">点击</button>
  </div>
 
</template>

<script>

  import {mapActions,mapMutations} from "vuex"
  import {ZFB_ADD_NUM_01} from "../../store"
export default {
  name: 'child',
  data(){
    return {

    }
  },

  methods: {
      
    ...mapActions([
      ZFB_ADD_NUM_01.actions_type
    ]),
   
    fn(){
      console.log(ZFB_ADD_NUM_01)
      this[ZFB_ADD_NUM_01.actions_type](5)
    }
  }
 
  


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
