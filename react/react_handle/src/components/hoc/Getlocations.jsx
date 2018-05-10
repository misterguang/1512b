import React, { Component } from 'react'
import $ from "jquery"

import Store,{GetLocation} from "../../store"

 const GetLocations = (com) => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state={
        Com:null,
        location:null
      }
    }
    dataHandle(city){
        
        let data=null
        this.props.getData[0].some((item)=>{
          return item.city.some((i)=>{
            
            if(i.name.includes(city)){
              data=i
            }
            return i.name.includes(city)
          })
        })
        
        Store.dispatch(GetLocation(data))
        this.setState({
          Com:com,
          location:data
        })
    }
    componentWillMount(){
      if(Store.getState().locationAddress.length<=0){
        $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', () => {
          this.dataHandle(remote_ip_info.city)
        

          // formdata.city = remote_ip_info.city
          // formdata.province = remote_ip_info.province
          // formdata.country = remote_ip_info.country
        })
      }else{
        this.setState({
          Com:com,
         
        })
      }
     
    }
    render(){
      const Com=this.state.Com
      return Com?<Com {...this.props} />:null
    }
  }
}

export default GetLocations