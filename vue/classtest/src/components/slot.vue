<template>
  <main>

      <child>
        <template scope="props">
            <span>{{props.msg}}</span>
        </template>
       
      </child>
  </main>
  </template>
  
  <script>

    import child from "./common/child"
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg:"heihei"
      }
    },
    components: {
      child
    }
  
  
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  