<template>
  <div id="app">
    <!-- 用来加载所有子页面，用来嵌套其他组件 -->
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
        // 如果用户登录了，就获取信息
    if (this.$cookie.get("userId")) {
      this.getUser();
      this.getCartCount();
    }
  },
  methods: {
    // 刷新时更新一次数据
    // 获取用户信息
    getUser() {
      this.$axios.get("/user").then((res = {}) => {
        // to-do保存到vuex里
        // 写法参考文档
        // 未登录状态时res为undefined可能会报错，所以res设置默认值
        this.$store.dispatch("saveUserName", res.username);
        // 保存到vuex里面
      });
    },
    // 获取购物车商品数量
    getCartCount() {
      // 写法参考文档
      // 未登录状态时res为undefined可能会报错，所以res设置默认值
      this.$axios.get("/carts/products/sum").then((res = 0) => {
        // to-do保存到vuex里
        this.$store.dispatch("saveCartCount", res);
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
