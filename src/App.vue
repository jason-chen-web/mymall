<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  // data(){
  //   return {
  //     res:{}
  //   }
  // },
  // //获取mock数据
  // mounted() {
  //   this.$axios.get('/user/login').then((res)=>{
  //     this.res= res
  //   })
  // },
 
}
</script>


<style >
  @import './assets/scss/reset.scss'
</style>
