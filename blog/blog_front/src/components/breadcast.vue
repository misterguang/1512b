<template>
  <el-breadcrumb separator="/" class="breadCrumb breadcast">
    <el-breadcrumb-item v-for="(i,index) in datalist" >
        <span @click="changeClass(i,index)"> {{i.name}} </span></el-breadcrumb-item>

</el-breadcrumb>
</template>
<script>
    import {
        mapState,
        mapActions
    } from "vuex"
  
    export default {
        computed: {
            ...mapState({
                datalist: (state) => state.breadcast
            })
        },
        mounted(){
            console.log(this.datalist)
        },
        methods: {
            changeClass(i, index) {

                if(i.state=="1"){
                    this.changeClass_A([i.id])
                }else if(i.state=="0"){
                    this.changeClass_A([])
                }

                this.$router.push("/index/list")

            },
            ...mapActions([
               "changeClass_A"
                // indexFn: action_type.RECOMMENDDATA.actions
            ])
        }
    }
</script>
<style>
    .breadcast{
        padding:10px 0;
    }
</style>