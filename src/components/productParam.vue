<template>
  <div class="nav-bar">
    <div class="container">
      <div class="pro-title">小米8</div>
      <div class="pro-param">
        <a href="javascript:;">概述<span>|</span></a>
        <a href="javascript:;">参数<span>|</span></a>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-bar",
};
</script>
<style lang="scss">
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";

.nav-bar {
  height: 70px;
  line-height: 70px;
  border: 1px solid $colorH;
  .container {
    @include flex();
    .pro-title {
      font-style: $fontH;
      color: $colorB;
      font-weight: bold;
    }
    .pro-param {
      font-style: $fontJ;

      a {
        color: $colorC;
        span {
          // display: inline-block;
          margin: 0 10px;
        }
        // &:last-of-type {
        //   margin-right: 10px;
        // }
      }
    }
  }
}
</style>