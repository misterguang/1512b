import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"
import { connect } from "react-redux"
import { NavBar, Icon, Flex } from 'antd-mobile';

import Foot from "../common/foot"
import axios from "axios"
import style from "../../css/index.css"
import ChooseNav from "../common/chooseNav"

import asyncGetDataComponent from "../hoc/asyncGetDataComponent"
import Getlocations from "../hoc/Getlocations"

class ChooseLocation extends Component {
  constructor(props) {
    super(props)
    console.log(111111)
    console.log(this.props)
    this.state={
      cityList:this.props.getData[0],
      locations:[]
    }
  }
 
  render() {
    // 渲染城市列表
    const $el = this.state.cityList.map((i, index) => {
      const $li = i.city.map((j, jIndex) => {
        return <p key={j.id} ref={j.id} id={j.id} className={style.cityList} onClick={(e)=>{this.chooseHandle(e,j)}}>{j.name}</p>
      })
      return <section key={index} className={style.sectionList} id="cityList">
        <h4 >{i.letter}</h4>
        <Flex wrap="wrap">
          {$li}
        </Flex>
      </section>
    })

    
    // 渲染已经选中的城市
    const $p=this.props.locationAddress.map((i,index)=>{
        return (
          <p key={index}  onClick={(e)=>{this.deleteHandle(i)}}>{i.name}</p>  
        )
    })
    return (
      <div className={style.chooseCity}>
        <ChooseNav title="选择城市" {...this.props}/> 
        <section className={style.carAddress}>
          <span>您的上牌地址</span>
          <aside><Link to="/chooseLicencePlate"> {this.props.licencePlate}<Icon type="right" /></Link></aside>
        </section>
        {/* 渲染选择的 */}
        <section className={style.cityAddress}>
          <h4 >您已选择城市</h4>
          <Flex wrap="wrap">
            {$p}
          </Flex>
        </section>
        <div>
          {$el}
        </div>
      </div>)
  }
}



let select=(state)=>{
  return {...state}
}

export default asyncGetDataComponent(Getlocations(connect(select)(ChooseLocation)),[{url:"/api/cityList",type:"get"}])



