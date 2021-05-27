<template>
  <div class="service-bar">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span> 预约维修服务</li>
        <li><span class="icon-7day"></span> 7天无理由退货</li>
        <li><span class="icon-15day"></span> 15天免费换货</li>
        <li><span class="icon-post"></span> 满150包邮</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "service-bar",
};
</script>

<style lang='scss'>
@import "../assets/scss/mixin.scss";
.service-bar {
  color: #666666;
  font-size: 16px;
  padding: 33px 0;
  li {
    display: inline-block;
    width: 24.8%;
    text-align: center;

    border-right: 1px solid #e5e5e5;
    span {
      vertical-align: middle;
      margin-right: 8px;
    }
    .icon-setting {
      @include bcg(20px, 20px, "/imgs/icon-setting.png");
    }
    .icon-7day {
      @include bcg(20px, 20px, "/imgs/icon-7day.png");
    }
    .icon-15day {
      @include bcg(20px, 20px, "/imgs/icon-15day.png");
    }
    .icon-post {
      @include bcg(20px, 20px, "/imgs/icon-post.png");
    }
  }
}
</style>