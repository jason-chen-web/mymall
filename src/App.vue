<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
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
  mounted() {
    this.getUser();
    this.getCartCount();
  },
  methods: {
    // 拉取数据
    getUser() {
      this.$axios.get("/user").then(() => {
        // to-do保存到vuex里
      });
    },
    getCartCount() {
      this.$axios.get("/carts/products/sum").then(() => {
        // to-do保存到vuex里
      });
    },
  },
};
</script>


<style lang='scss'>
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>
