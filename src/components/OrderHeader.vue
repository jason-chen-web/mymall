<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <!-- 点击后跳到首页 -->
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>
          {{ title }}
          <slot name="tip"></slot>
        </h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{ username }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "order-header",
  props: {
    title: String,
  },
  computed: {
    // 本来是写data里面的，但会出现数据已经有但没展示所以放这里
    // 作用读取vuex里的username
    // 一旦变量发生变化，会重新计算一次，重新调用一次方法
    // username() {
    //   return this.$store.state.username;
    // },
    // cartCount() {
    //   return this.$store.state.cartCount;
    // },
    ...mapState(["username"]),
  },
  mounted() {},
};
</script>

<style lang='scss'>
.order-header {
  padding: 30px 0;
  border-bottom: 2px solid #ff6600;
  .header-logo {
    float: left;
  }
  .title,
  .username {
    display: inline-block;
    height: 55px;
    line-height: 55px;
  }
  .title {
    float: left;
    margin-left: 54px;
    h2 {
      font-size: 28px;
      color: #333;
    }

    span {
      font-size: 14px;
      margin-left: 17px;
      color: #999;
      font-weight: 200;
    }
  }
  .username {
    float: right;
    a {
      color: #666;
      font-size: 16px;
    }
  }
}
</style>