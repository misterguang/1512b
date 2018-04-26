<template>
  <main>
      <h2 class="title">{{data.article_name}}</h2>
      <h5 class="title2"><span>作者：<em>{{data.editer}}</em></span><span>访问量：<em>{{data.visitors}}</em></span><span>时间：<em>{{data.time}}</em></span></h5>
      <div v-html="data.content">
        
      </div>
  </main>
 
</template>


<script>
    import {
        mapState,
        mapActions
    } from "vuex"
    
    export default {
        data() {
            return {
                data: {
                    content: null
                }
            }
        },
        created() {
            this.getData()
           
        },
        watch:{
            $route:function(){
               
                this.getData()
            }
        },
        methods: {
            
            getData(){
                this.axios.get(`/api/front/article/getArticle?id=${this.$route.query.id}`).then(function(data) {
               
                    this.data = data.data.data[0]
                   
                    
                }.bind(this))
            }
        }

    }
</script>
<style>
    main {
        padding: 20px;
        background: #eee;
    }
    main img{
        width: 100%;
    }
    .title{
        text-align: center;
        margin:20px 0;
    }
    .title2{
        text-align: center;
        margin:0 0 30px 0;
    }
    .title2 em{
        font-style: normal;
        font-size: 12px;
        font-weight: normal
    }
    .title2 span{
        margin:0 10px;
    }
</style>