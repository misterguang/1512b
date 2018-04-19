<template>
<main>
  <p>{{msgc}}</p>
 <button @click="fn">改变</button>
  <ul>
      <li v-for="(i,index) in list" :key="i.id"> {{i.name}} </li>
  </ul>

  <!-- <ul>
    <li>
      <input type="radio" id="1"  value="Jack1" v-model="checkData">
    </li>
    <li>
        <input type="radio" id="2"  value="Jack2" v-model="checkData">
      </li>
      <li>
          <input type="checkbox" id="3"  value="Jack3" v-model="checkData">
        </li>

    </ul> -->
    <ul>
        <input type="checkbox" v-model="toggle" v-bind:true-value="a" v-bind:false-value="b">
        <input type="text" v-model.lazy="msg" @keyup="fnn">
    </ul>
    <button @click="go">点击1</button>
 <button @click="changeHandle">点击</button>
</main>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msga:1,
      msgb:2,
      list:[{id:1,name:1},{id:2,name:2},{id:3,name:3},{id:4,name:4},{id:5,name:5},{id:6,name:6}],
      state:true,
      checkData:null,
      toggle:null,
      a:1,
      b:2,
      msg:""
    }
  },
  methods: {
    fn(){
      this.msga++
    },
    changeHandle(){
      // this.list.sort((a,b)=>{
      //     return Math.random()>0.5?1:-1
      // })
      // this.list=[{id:1,name:1},{id:4,name:4},{id:3,name:3},{id:5,name:5},{id:2,name:2},{id:6,name:6}]
      
    },
    go(){
      // console.log(this.checkData)
      console.log(this.toggle)
    },
    fnn(e){
      console.log(this.msg)
    }
  },
  computed: {
    msgc(){
      return this.msga+this.msgb
    }
  }

} 
</script>

<style scoped>

</style>
