
let bus={
    cbArr:{},
    $on(event,cb){
      if(this.cbArr.hasOwnProperty(event)){
        this.cbArr[event].push(cb)
      }else{
        let obj={[event]:[cb]}
        Object.assign(this.cbArr,obj)
      }
    },
    $emit(event,...data){
      Object.entries(this.cbArr).forEach(function(item) {
          if(event==item[0]){
            item[1].forEach((cb)=>{
                cb(...data)
            })  
          }
      }, this);
    },
    $destroy(event){
        delete this.cbArr[event]
    }
}

export default bus



