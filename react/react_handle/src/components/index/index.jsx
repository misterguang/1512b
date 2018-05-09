import React, { Component } from 'react'
import { Route,Link } from "react-router-dom"
import { connect } from "react-redux"
import { NavBar, Icon,Flex } from 'antd-mobile';
import  Nav from "../common/indexNav"
import  Foot from "../common/foot"
import $ from "jquery"
import asyncGetDataComponent from "../hoc/asyncGetDataComponent"
import Getlocations from "../hoc/Getlocations"

class Index extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
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

export default asyncGetDataComponent(Getlocations(connect(select)(Index)),[{url:"/api/cityList",type:"get"}]) 



