<template>
  <main>
    <keep-alive>
        <component :is="stateCom"></component>
    </keep-alive>
   
    <button @click="fn">点击a</button>
    <button @click="fn1">点击b</button>
    <button @click="fn2">点击c</button>
  </main>
</template>

<script>
  import tab1 from "./comp/tab1"
  import tab2 from "./comp/tab2"
  import tab3 from "./comp/tab3"
  export default {
    name: 'HelloWorld',
    data() {
      return {
        stateCom: "tab1"
      }
    },
    methods:{
      fn(){
        this.stateCom="tab2"
      },
      fn1(){
        this.stateCom="tab3"
      },
      fn2(){
        this.stateCom="tab1"
      }
    },
    components: {
      tab1,
      tab2,
      tab3
    }



  } 
</script>

<style scoped>
</style>