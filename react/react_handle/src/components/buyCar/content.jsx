import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"
import { connect } from "react-redux"
import { NavBar, Icon, Flex, List } from 'antd-mobile';

import Foot from "../common/foot"
import $ from "jquery"

const Item = List.Item;
const Brief = Item.Brief;
import style from "../../css/buycar.css"





class Content extends Component {
  constructor(props) {
    super(props)
    
      
  }
  

  render() {

    const $el = this.props.carList.map((i, index) => {
      return <List renderHeader={() => i.carName} key={index} className={"my-list " + style.selfList}>
        <Item >
          <div className={style.love}>
            <span>{i.price}</span>
            
            <Icon type={i.state?"check-circle-o":"cross-circle"} size='sm' onClick={(e) => { this.everyHandle(e, i) }} />
          </div>
        </Item>
      </List>

    })
    return (
      <div className={style.main}>
        <main>
          {$el}
        </main>
        <Foot />
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
        <Route path='/buycar/content' component={connect(select)(Content)}/>
  )
}
export default childrenRouter



