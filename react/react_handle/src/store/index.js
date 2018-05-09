import {createStore,applyMiddleware } from "redux"
import thunkMiddleware  from "redux-thunk"
export * from "./actions"
let initialState={
  locationAddress: []
}

let reducer=(state = initialState,actions)=>{
  let {type,text}=actions
  switch(type){
    case "getLocation":{
      let arr=[...state.locationAddress,text]
      let obj=Object.assign({},state,{locationAddress:arr})
    
      return obj
    } break
    default:{

      return state
    }
  }
}


export default createStore(reducer,applyMiddleware(thunkMiddleware))