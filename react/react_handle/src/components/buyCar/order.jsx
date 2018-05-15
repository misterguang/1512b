import React, { Component } from 'react'
import { Route,Link } from "react-router-dom"
import { connect } from "react-redux"
import { NavBar, Icon,Flex,List } from 'antd-mobile';
import  Nav from "../common/indexNav"
import  Foot from "../common/foot"
import $ from "jquery"
import style from "../../css/buycar"
const Item = List.Item;
const Brief = Item.Brief;
// import store,{actions,INDEX_ADDLOCATION,BUYCAR_ORDERTYPE} from "../../redux"
import {AmendCarList,amendOrderType} from "../../store/index"

// 需要这步，你要npm 这个，
import PropTypes from 'prop-types';
class Order extends Component {
   // 这一步是重点
   static contextTypes = {
    router: PropTypes.object.isRequired
  };


  constructor(props,context) {
    super(props,context)
    
    this.state={
      type:""
    }
  }
  handle(e,i){
    this.setState({
      type:i
    })
    let obj={
      type:"px",
      reg:i
    }
   this.dataHandle(i)

    this.props.dispatch(amendOrderType(""))

    // this.props.buyCarHandleFn()
  }
  dataHandle(item){
    var arr=[...this.props.carList]
      if(item=="+"){
        arr.sort((a,b)=>{
          return b.price.split("-")[0]-a.price.split("-")[0]
        })
      }else{
        arr.sort((a,b)=>{
          return a.price.split("-")[0]-b.price.split("-")[0]
        })
      }

      this.props.dispatch(AmendCarList(arr))
      this.context.router.history.push("/buycar/content")
  }
  render() {
    return (
      <div className={style.main}>
        <main>
        <List className={"my-list"}>
          <Item  onClick={(e)=>{this.handle(e,"+")}}><span style={this.state.type=="+"?{color:"red"}:{color:"black"}}>价格最高</span></Item>
          <Item  onClick={(e)=>{this.handle(e,"-")}}><span style={this.state.type=="-"?{color:"red"}:{color:"black"}}>价格最低</span></Item>
        </List>
        </main>
       
      </div>
    )
  }
}


const select = (state) => {

  return { ...state }
}

// 抛出组件时，直接抛出路由
const childrenRouter=()=>{
  return (
        <Route path='/buycar/order' component={connect(select)(Order)}/>
  )
}

export default childrenRouter



