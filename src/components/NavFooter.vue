<template>
  <div class="nav-footer">
    <div class="logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>无名商城</p>
    </div>
    <div><a href="https://bra.in/7pD8gr" class="net" target="_blank">我的动态知识网络</a></div>
    <div class="link">Copyright ©2021 All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: "nav-footer",
};
</script>

<style lang='scss'>
.nav-footer {
  width: 1919px;
  height: 234px;
  background: #333333;
  border-top: 4px solid #ff7301;
  text-align: center;
  color: #999999;
  font-size: 16px;
  .logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .net{
    display: inline-block;
      color: #999999;
            margin-bottom: 13px;


  }
}
</style>