import Vuex from "vuex"
import Vue from "vue"
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
   state:{
     navList:null,
     articleListData:null,
     breadcast:[{name:"首页",id:null,state:0}],
     articleList:null,
     topList:null,
     newList:null
   },
   actions:{
      getNavList_A({commit}){
        return new Promise((resolve,reject)=>{
          axios.get("/api/front/article/getNav").then((data)=>{   
             commit("getNavList_M",data.data.data)
             resolve()
           })
        })
        
      },
      getArticleList_A({commit}){
        return new Promise((resolve,reject)=>{
          axios.get("/api/front/article/getArticleAll").then((data)=>{   
             commit("getArticleList_M",data.data.data)
             resolve()
           })
        })
      
      },
     
      getDataAll({dispatch},router){
        switch (router.route.query.url){
            case "/index/list" :{
                Promise.all([dispatch("getNavList_A"),dispatch("getArticleList_A")]).then(()=>{
                  router.router.push({path:"/index/list",query:{pageData:"navList"}})
                })
            } break;
        }
        
      },
      // 头部点击改变分类
      changeClass_A({commit},arr){
        commit("changeClass_M",arr)
      },

      search_A({commit},msg){
          commit("search_M",msg)
      }

   },
   mutations:{
    //  获取分类数据
      getNavList_M(state,data){
        state.navList=data
      },
      // 获取文章列表
      getArticleList_M(state,data){
        state.articleListData=data
       
        state.articleList=data.filter((i)=>{
            return i.recommend=="1"
        })
        // 选取点击排行
        state.topList=data.sort((a,b)=>{
            return b.visitors-a.visitors
        }).slice(0,5)


         // 选取最新排行
         state.newList=data.sort((a,b)=>{
              return new Date(b.time).getTime()-new Date(a.time).getTime()
          }).slice(0,5).map((i)=>{
              i.time=i.time.slice(0,10)
              return i
          })

      },
      // 改变分类，面包屑以及文章列表改变
      changeClass_M(state,arr){
        state.breadcast=[{name:"首页",id:null,state:0}]
        // 改变面包屑数组
        state.navList.some((i)=>{
            if(i.onedata.id==arr[0]){
              state.breadcast.push({name:i.onedata.cnname,id:i.onedata.id,state:1})
              i.twodata.every((j)=>{
                if(j.id==arr[1]){
                  state.breadcast.push({name:j.cnname,id:j.id,state:2})
                }else{
                  return true
                }
              })
              return true
            }else{
              return false
            }
        })
        // 改变文章列表
        if(arr.length==1){
          state.articleList=state.articleListData.filter((i)=>{
            return i.oneId==arr[0]
          })
        }else if(arr.length==2){
          state.articleList=state.articleListData.filter((i)=>{
            return i.twoId==arr[1]
          })
        }else{
          state.articleList=state.articleListData.filter((i)=>{
              return i.recommend=="1"
              // return true
          })
        }
        
      },
      search_M(state,msg){
        state.articleList=state.articleListData.filter((i)=>{
          return i.article_name.includes(msg)||i.editer.includes(msg)
        })
        state.breadcast=[{name:"搜索",id:null,state:0}]
      }
   }
})