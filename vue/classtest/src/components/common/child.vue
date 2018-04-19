<template>
  <main>
      <div>
          <p>这里是child{{msg}}</p>
          <slot :msg="msg"></slot>
      </div>
  </main>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
       msg:"haha"
      }
    },
   
  } 
  </script>
  
  <style scoped>
  
  </style>
  