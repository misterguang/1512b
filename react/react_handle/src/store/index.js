import {createStore,applyMiddleware } from "redux"
import thunkMiddleware  from "redux-thunk"
export * from "./actions"
let initialState={
  locationAddress: [],
  cityList:[]
}

let reducer=(state = initialState,actions)=>{
  let {type,text}=actions
  
  switch(type){
    case "getLocation":{
      let arr=[...state.locationAddress,text]
      let obj=Object.assign({},state,{locationAddress:arr})
      return obj
    } break
    case "AddCityList":{
 
      var aa=Object.assign({},state,{cityList:text})
      return aa
    } break
    case "DeleteLocation":{
        let arr=[...state.locationAddress]
        if(arr.length>1){
          arr.splice(text,1)
        }
        
      var aa=Object.assign({},state,{locationAddress:arr})
      return aa
    } break
    default:{

      return state
    }
  }
}


export default createStore(reducer,applyMiddleware(thunkMiddleware))