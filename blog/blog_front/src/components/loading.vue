<template>
    <div>加载中</div>
</template>
<script>
       import {mapActions,mapState} from "vuex"
    export default{
      data(){
        return {}
      },
      created(){
        // console.log(111111)
        this.getDataAll({router:this.$router,route:this.$route})
      
      },
      methods: {
        ...mapActions([
            "getDataAll"
          ])
      }

    }
</script>
<style>


</style>