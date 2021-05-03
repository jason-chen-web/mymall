<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="menu">
          <a href="javascript:;">松果出行</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="name">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;">购物车</a>
        </div>
      </div>
    </div>

    <div class="nav-header"></div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  props: {},
};
</script>

<style lang="scss">
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background: #333333;
    color:#B0B0B0;
    .container {
      width: 1226px;
      margin-right:auto;
      margin-left:auto;
      
      
    }
  }
}
  
</style>

