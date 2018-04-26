var Mock=require("mockjs")
var Random = Mock.Random
var shopcart=require("./shopcart")
// Random.cname()
// Random.city()


var list = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-100': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      'name':"@cname",
      'addr':"@city",
      "content":"@cparagraph"
  }]
})
module.exports=function(app){

  app.get("/api/data",function(req,res,next){
    res.send(shopcart)
  })
  app.get("/api",function(req,res,next){
    var data = Mock.mock({
          // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
          'list|1-100': [{
              // 属性 id 是一个自增数，起始值为 1，每次增 1
              'id|+1': 1,
              'name':"@cname",
              'addr':"@city"
          }]
      })
      console.log(data)
    res.send(data)
  })
  app.get("/api/list",function(req,res,next){
  
    res.send(list)
  })
  app.get("/api/detail",function(req,res,next){
      console.log(req.query.id)
      let data=list.list.filter((i)=>{
        // console.log(i.id==req.query.id)
        return i.id==req.query.id
      })
      res.send(data)
  })
  
}