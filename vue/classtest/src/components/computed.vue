<template>
<main>
  <p>{{msgc}}</p>
 <button @click="fn">改变</button>

 <div  v-if="state" v-for="i in list">
    <p>{{i}}</p>
 </div>
</main>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msga:1,
      msgb:2,
      list:[1,2,3,4],
      state:false
    }
  },
  methods: {
    fn(){
      this.msga++
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
