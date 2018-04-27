<template>
    <el-row class="rowall">
        <el-col :span="24" style="border-radius: 4px;">
            <el-row class="classrowone">
                点击排行
            </el-row>
            <el-row v-for="(i,index) in datalist" class="classrow" :span="24">
                    <p @click="goToDetailFn(i)">
                        <el-col :span="2" class="classrow1">{{index+1}}</el-col>
                        <el-col :span="14" class="classrow2">{{i.article_name}}</el-col>
                        <el-col :span="6" class="classrow3">
                            <i class="el-icon-star-on"></i>
                            <span>{{i.visitors}}</span>
                        </el-col>

                    </p>
                
            </el-row>
        </el-col>
    </el-row>
</template>
<script>
    import {
        mapActions,
        mapState
    } from "vuex"
    // import action_type from "../store/action_type"

    export default {
        data() {
            return {
            }
        },
        computed: {
            ...mapState({
                datalist: (state) => state.topList
            })
        },
        methods:{
            ...mapActions([
                "changeClass_A"
            ]),
            goToDetailFn(i){
                
                this.$router.push({name:'detail',query:{id:i.id}})
                var arr = [i.oneId,i.twoId]
                this.changeClass_A(arr)
            }
        }
        
    }
</script>
<style scoped>
    .rowall {
        background: #fff7b5;
        padding: 5px;
        border-radius: 5px;
    }
    
    .classrowone {
        border-radius: 5px;
        background: #00F5FF;
        margin-bottom: 10px;
        text-align: center;
        color: white;
        padding: 2px 0;
    }
    
    .classrow {
        margin: 5px 0;
    }
    
    .classrow1 {
        border-radius: 5px;
        width: 26px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        background: red;
        margin-right: 10px;
        font-size: 12px;
    }
    
    .classrow2 {
        /*background: lightblue;*/
        margin-right: 10px
    }
    
    .classrow3 {
        /*background: lightgreen;*/
        font-size: 14px;
    }
    
    .classrow3 span {
        display: inline-block;
        width: 50px;
        text-align: center
    }
</style>