import React, { Component } from 'react'
import { Route,Link } from "react-router-dom"
import { connect } from "react-redux"
import { NavBar, Icon,Flex } from 'antd-mobile';
import  Nav from "../common/indexNav"
import  Foot from "../common/foot"
import $ from "jquery"
import asyncGetDataComponent from "../hoc/asyncGetDataComponent"
import Getlocations from "../hoc/Getlocations"

import Store,{AddCityList} from "../../store"
class Index extends Component {
  constructor(props) {
    super(props)
    if(this.props.getData){
      this.props.dispatch(AddCityList(this.props.getData[0]))
      // console.log(this.props.getData[0])
    }
    // console.log(this.props)
  }
  render() {
    return (
    <div>
      <Nav {...this.props}/>
      <Foot />
    </div>)
  }
}


const select = (state) => {

  return { ...state }
}

// let exportCom=null

// console.log(Store.getState().locationAddress.length>0&&Store.getState().cityList.length>0)

// if(Store.getState().locationAddress.length>0&&Store.getState().cityList.length>0){
  
//   exportCom=connect(select)(Index)
// }else{
 
//   exportCom=asyncGetDataComponent(Getlocations(connect(select)(Index)),[{url:"/api/cityList",type:"get"}])
// }

export default asyncGetDataComponent(Getlocations(connect(select)(Index)),[{url:"/api/cityList",type:"get"}]) 



