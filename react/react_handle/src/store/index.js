import {createStore,applyMiddleware } from "redux"
import thunkMiddleware  from "redux-thunk"
export * from "./actions"
let initialState={
  locationAddress: [],
  cityList:[],
  licencePlate:{},
  carList:[],
  orderType:""
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
    case "ListenPlace":{
     console.log(text)
    
    return Object.assign({},state,{licencePlate:text})
  } break 
  case "addCarList":{
     console.log(text)
     let arr=[]
     text.forEach(function(i) {
      i.forEach((j)=>{
        j.carList.forEach((k)=>{
          arr.push(k)
        })
        
      })
    }, this);
    arr=arr.filter((i)=>{
      return i.price!=""
    })
    return Object.assign({},state,{carList:arr})
  } break 
  case "amendCarList":{
    
    return Object.assign({},state,{carList:text})
  } break

  case "amendOrderType":{
    
    return Object.assign({},state,{orderType:text})
  } break

    default:{

      return state
    }
  }
}


export default createStore(reducer,applyMiddleware(thunkMiddleware))