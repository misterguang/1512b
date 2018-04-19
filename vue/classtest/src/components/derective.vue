<template>
    <!-- <div v-aa>
      <p></p>
    </div> -->
    <child1></child1>
</template>
<script>
  import child1 from "./derectives/child1"
  export default{
    data(){
      return {}
    },
    // directives:{
    //     aa:{
    //       bind(el,binding,vnode,oldnode){
    //         var $p=el.getElementsByTagName("p")[0]
    //         var $span=document.createElement("span")
    //         el.replaceChild($span,$p)
    //         console.log(el)
    //         console.log(binding)
    //         console.log(vnode)
    //         console.log(oldnode)
    //       }
    //     }
    // }
    components:{
      child1
    }
  }
</script>