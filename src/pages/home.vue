<template>
  <div>
    <!-- 有了home.vue（本质是一个模板，结构上复用）就不用每个页面都写nav-header，nav-footer
    index,detail.product放到router-view即可， -->
    <nav-header></nav-header>
    <router-view> </router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader";
import NavFooter from "../components/NavFooter";

export default {
  components: {
    NavHeader,
    NavFooter,
  },
  name: "home",
};
</script>

<style>
</style>