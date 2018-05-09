import React, { Component } from 'react'
import {connect} from "react-redux"
import {changeName } from "../store/actions"
class Test extends Component{
   constructor(props){
      super(props)
    
   }
   change(){
     console.log(changeName)
      this.props.dispatch(changeName("lisi"))
      this.props.history.push("/")
   }
   render(){
      return <div><button onClick={this.change.bind(this)}>点击</button></div>
   }
}

let select=(state)=>{
  let obj=Object.assign({},state)
  return obj
}

export default connect(select)(Test)