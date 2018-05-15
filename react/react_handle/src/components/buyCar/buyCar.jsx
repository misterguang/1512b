import React, { Component } from 'react'
import { Route, BrowserRouter as Router,Link,Switch,withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { NavBar, Icon,Flex } from 'antd-mobile';
import  Nav from "../common/indexNav"
import  Foot from "../common/foot"
import $ from "jquery"
import style from "../../css/buycar.css"
import {AddCarList} from "../../store"


import asyncGetDataComponent from "../hoc/asyncGetDataComponent"
import Getlocations from "../hoc/Getlocations"
import BuyCarNav from "../common/buyCarNav"
// 需要这步，你要npm 这个，
import PropTypes from 'prop-types';


class BuyCar extends Component {
   // 这一步是重点
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  constructor(props,context) {
    super(props,context)
    console.log(this.context)
  
  //  将汽车数据存到redux中
    this.props.dispatch(AddCarList(props.getData[1]))


    this.state={
      type:this.props.orderType,
      state:true
    }
  }
  handle(type){
    console.log(this.props)
    this.context.router.history.push("/buycar/order")
    this.setState({
      type
    })
  }

  render() {
    return (
    <div>
     <BuyCarNav {...this.props}/>
     {/* 筛选部分 */}
     <Flex className={style.select}>
        <Flex.Item>
         <p onClick={()=>{this.handle("px")}}>排序<Icon type={this.state.type=="px"?"up":"down"} size="xs" /></p>
        </Flex.Item>
        <Flex.Item>
         <p onClick={()=>{this.handle("pp")}}>品牌<Icon type={this.state.type=="pp"?"up":"down"} size="xs" /></p>
        </Flex.Item>
        <Flex.Item>
         <p onClick={()=>{this.handle("jg")}}>价格<Icon type={this.state.type=="jg"?"up":"down"} size="xs" /></p>
        </Flex.Item>
        <Flex.Item>
         <p onClick={()=>{this.handle("sx")}}>筛选<Icon type={this.state.type=="sx"?"up":"down"} size="xs" /></p>
        </Flex.Item>
      </Flex>
      {this.props.children}
    
    </div>)
  }
}


const select = (state) => {

  return { ...state }
}





import AsyncComponent from "../../tool/asyncComponent"

const Content = AsyncComponent(() => import("./content"));
const Order = AsyncComponent(() => import("./order"));



let CurrentComponent=asyncGetDataComponent(Getlocations(connect(select)(BuyCar)),[{url:"/api/cityList",type:"get"},{url:"/api/carList",type:"get"}])

// 买车的路由信息
const buyCarRouter=({history,location,match})=>{
    return (
      <CurrentComponent>
            <Content />
            <Order />
      </CurrentComponent>
            
       
    )
  }

export default buyCarRouter


