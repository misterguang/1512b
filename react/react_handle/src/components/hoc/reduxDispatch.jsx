import React, { Component } from 'react'
import $ from "jquery"
import Store, { actions,ADDPROVINCE} from "../../store/index"
const reduxDispatch = (com) => {
  return class extends Component {
    constructor(props) {
      super(props)
      
      if (this.props.getData) {
        console.log(this.props)

        Store.subscribe(()=>{
          console.log(Store.getState())
          this.test()
        })
        
        Store.dispatch(actions[ADDPROVINCE](this.props.getData[0]))
        // this.state = {
        //   cityList: this.props.getData
        // }
       
      }
    }

    test() {
      if (Store.getState().provinceList) {
        this.state={
          Com: com
        }
      }else{
        this.state={
          Com:null
        }
      }
    }
    render() {
      const Com = this.state.Com
      return Com ? <Com {...this.props} /> : null

    }
  }

}

export default reduxDispatch