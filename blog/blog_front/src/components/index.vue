<template>
  <div class="index">
      <headertop></headertop>
      <!--面包屑-->
      <breadcast></breadcast>
      <!--主内容区-->
      <el-row :gutter="24" class="main">
          <el-col :span="17">
              <router-view  class="grid-content"></router-view>
          </el-col>
          <el-col :span="7">
              <div class="grid-content ">
                  <search></search>
                  <top></top>
                  <news></news>
              </div>
          </el-col>
      </el-row>
      <footers></footers>
  </div>
  </template>
  <script>
      import breadcast from "./breadcast";
      import header from "./header"
      import store from "../store/index"
      import search from "./search"
      import top from "./top"
      import news from "./new"
      import footers from "./footer"
      // import action_type from "../store/action_type"
      import {
          mapState,
          mapActions
      } from "vuex"
  
      export default {
          name: 'index',
          data() {
              return {
                  activeIndex: '1'
              };
          },
          methods: {
              handleSelect(key, keyPath) {
                  console.log(key, keyPath);
              }
              
          },
         
          mounted () {
           
          },
         
          components: {
              breadcast: breadcast,
              headertop: header,
              search: search,
              top: top,
              news: news,
              footers: footers
  
          },
          beforeRouteEnter(to, from, next){
            console.log(store.state.navList)
            if(!store.state.navList){
              // sessionStorage.setItem("redirect","/index")
              next({path:"/loading",query:{url:"/index/list"}})
            }else{
              next()
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
  
  .borderR {
      border-radius: 10px;
  }
  
  .breadCrumb {
      height: 40px;
      line-height: 40px;
      /*background: lightblue;*/
      padding-left: 20px;
  }
  
  .el-row {
      margin-bottom: 20px;
      &:last-child {
          margin-bottom: 0;
      }
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
  .main{
      margin-bottom: 0px;
      padding-bottom: 40px;
  }
  </style>