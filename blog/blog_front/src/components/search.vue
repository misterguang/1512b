<template>
    <div class="searchs">
        <h4>全站搜索</h4>
        <el-row :gutter="18" >
            <el-col :span="16"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
            <el-col :span="4"><el-button type="primary" icon="search" @click="searchFn">搜索</el-button></el-col>
        </el-row>
    </div>
  
 
 
</template>


<script>
    import {
        mapActions
    } from "vuex"
    export default {
        data() {
            return {
                input: ''
            }
        },
        methods: {
            ...mapActions([
                "search_A"
            ]),
            searchFn(){
                this.search_A(this.input)
                this.$router.push("/index/list")
            }
        }
    }
</script>
<style scoped>
    .searchs h4 {
        border-radius: 5px;
        background: #00F5FF;
        margin-bottom: 10px;
        text-align: center;
        color: white;
        padding: 2px 0;
    }
    
    .searchs {
        margin-bottom: 10px;
        background: #fff7b5;
        padding: 5px;
        border-radius: 5px;
    }
    .el-menu{
       background-color:  #86a6c7
    }
</style>