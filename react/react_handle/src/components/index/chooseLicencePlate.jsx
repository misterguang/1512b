import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"
import { connect } from "react-redux"
import { NavBar, Icon, Flex } from 'antd-mobile';

import Foot from "../common/foot"
import $ from "jquery"
import style from "../../css/index.css"
import ChooseNav from "../common/chooseNav"
import asyncGetDataComponent from "../hoc/asyncGetDataComponent"
import Getlocations from "../hoc/Getlocations"
import {ListenPlace} from "../../store/index"
class ChooseLocation extends Component {
  constructor(props) {
    super(props)

    this.state={
      provinceList:this.props.getData[1].provinceArr,
      showCityList:this.props.getData[1].city[this.chooseDefaultlisten()],
      classState:this.chooseDefaultlisten()
    }
    this.props.dispatch(ListenPlace(this.props.locationAddress[0]))
  }
  // 根据选车城市中的第一个选择上牌城市
  chooseDefaultlisten(){
      var keyItem=""
      Object.entries(this.props.getData[1].city).forEach(function(i) {
          i[1].forEach((j)=>{
           if(j.id==this.props.locationAddress[0].id){
              keyItem=i[0]
            }
          })
      }, this);
    return keyItem
  }
  // 根据省份选取城市
  provinceHandle(e,item){
      
      this.setState({
        classState:item.id,
        showCityList:this.props.getData[1].city[item.id]||[item]
      },()=>{
        this.props.dispatch(ListenPlace(this.state.showCityList[0]))
      })
      
  }
  // 点击城市时，改变上牌城市
  chooseCityHandle (item){
    this.props.dispatch(ListenPlace(item))
  }
  scrollHandle(e,i,index){
  
    let el=this.refs[i.letter]
    let num=el.offsetTop-90
    this.refs.province.scrollTop=num
  } 
  render() {
    // 渲染省份
    const $province = this.state.provinceList.map((i, index) => {
      return <section key={index}>
        <h4 ref={i.letter}>{i.letter}</h4>
        <ul>
          {i.province.map((j, index) => <li key={index} className={this.state.classState==j.id?style.activeColor:null} onClick={(e)=>this.provinceHandle(e,j)}>{j.name}</li>)}
        </ul>
      </section>
    })
    // 渲染城市
    const $city=this.state.showCityList.map((i,index)=>{
      return(
        <li key={index} onClick={()=>{this.chooseCityHandle(i)}}>{i.name}</li>
      )
    })
    // 渲染字母
    const $letter=this.state.provinceList.map((i, index) => {
      return  <li key={index} onClick={(e)=>{this.scrollHandle(e,i,index)}}>{i.letter}</li>
    })
    
    return (
      <div className={style.licencePlate}>
        <ChooseNav title="选择上牌城市" {...this.props} />
        <section className={style.cityAddressLicen}>
          <Flex wrap="wrap">
            <p>{this.props.licencePlate.name}</p>
          </Flex>
        </section>
        <main className={style.licencePlateMain}>
          <aside className={style.licencePlateAside} ref="province">
              {$province}
          </aside>
          
          <ul className={style.licencePlateCity}>
              {$city}
          </ul>
          <ul className={style.licencePlateLetter}>
            {$letter}
          </ul>
          
        </main>
      </div>)
  }
}


const select = (state) => {
  return { ...state }
}

export default asyncGetDataComponent(Getlocations(connect(select)(ChooseLocation)),[{url:"/api/cityList",type:"get"},{url:"/api/provinceCity",type:"get"}])



