<template>
    <nav class="index">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><h2>个人博客</h2></el-menu-item>
            <el-submenu v-for="(i,index) in navList" :index="i.onedata.id" >
                <template slot="title">{{i.onedata.cnname}}</template>
                <el-menu-item v-for="(j,index2) in i.twodata" :index="j.id">{{j.cnname}}</el-menu-item>
            </el-submenu>
        </el-menu>
       
    </nav>
</template>
<script>
   import {mapActions,mapState} from "vuex"
    export default {
        name: 'headers',
        data() {
            return {
                activeIndex: '1',
            };
        },
        computed: {
            ...mapState([
                "navList"
            ])
        },
       
        methods:{
            ...mapActions([
                "changeClass_A"
            ]),
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                this.changeClass_A(keyPath)
                this.$router.push("/index/list")
            }
        }
       
       
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .index {
        width: 1200px;
        margin: 0 auto;
    }
    
    .breadCrumb {
        height: 40px;
        line-height: 40px;
        /*background: lightblue;*/
        padding-left: 20px;
    }
    
    .el-row {
        margin-bottom: 20px;
      
    }
    
    .el-col {
        border-radius: 4px;
    }
    
    .bg-purple-dark {
        background: #99a9bf;
    }
    
    .bg-purple {
        background: #d3dce6;
    }
    
    .bg-purple-light {
        background: #e5e9f2;
    }
    
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>