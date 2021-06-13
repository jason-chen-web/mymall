<template>
  <div class="nav-bar" :class="{ is_fixed: isFixed }">
    <div class="container">
      <div class="pro-title">{{ title }}</div>
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
  data() {
    return {
      isFixed: false,
    };
  },
  props: {
    title: String,
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
    // 写initHeight为了方便后续移除事件
  },
  methods: {
    initHeight() {
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 152 ? true : false;
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.initHeight);
  },
};
</script>
<style lang="scss">
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";

.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid $colorH;
  background: $colorG;
  z-index: 11;
  &.is_fixed {
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 5px 5px $colorE;
  }
  .container {
    @include flex();
    .pro-title {
      font-size: $fontH;
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