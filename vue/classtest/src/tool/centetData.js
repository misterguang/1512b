
// 全局数据存储中心
var data={}

let centerData={
    data:data,
    $emit(...data){
      Object.assign(this.data,...data)
    }
   
}

export let center={
  data:data,
  $emit(...data){
    Object.assign(this.data,...data)
  }
 
}


export default {
  install(vue){
    vue.prototype.center=centerData
  }
}



