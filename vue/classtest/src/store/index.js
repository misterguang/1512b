// import vuex from "vuex"
// import vue from "vue"
// vue.use(vuex)
// export default new vuex.Store({
//   state:{
//     num:0
//   },
//   actions:{
//     getData({commit,state}){
//       return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           resolve({a:1234})
//         },2000)
//       })
//     },
//     getData1({commit,state}){
//       return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({b:5678})
//         },3000)
//       })
      
//     },
//     addnum_A({dispatch,commit,state},arg){
//       // console.log(state)
//       // state.num+=arg

//       // Promise.all([dispatch("getData"),dispatch("getData1")]).then((data)=>{
//       //   console.log(data)
//       //   commit("addnum_M",{num:arg,data})
//       // })

//         // dispatch("getData").then((data)=>{

//         //     return dispatch("getData1",data)
//         // }).then((data)=>{
//         //   commit("addnum_M",{num:arg,data})
//         // })

//         async function all(params) {
//             var a=await dispatch("getData")
//             var b=await dispatch("getData1",a)
//             return b
//         }
//         all().then((data)=>{
//           console.log(data)
//           commit("addnum_M",{num:arg,data})
//         })

//     }
//   },
//   mutations:{
//     addnum_M(state,data){
//       // setTimeout(()=>{
//       //   state.num+=arg
//       // },2000)
//       console.log(data)
//       state.num+=data.num

     
//     }
//   },
//   getters:{
//     numHandle(state){
//       return "$"+state.num
//     }
//   }
// })






import vuex from "vuex"
import vue from "vue"
vue.use(vuex)

import tm  from "./TM"
import zfb from "./ZFB"

export * from "./TM"
export * from "./ZFB"


export default new vuex.Store({
  modules:{
    tm,
    zfb
  }
})