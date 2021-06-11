<template>
  <div class="product">
    <product-param>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
    <div class="h">123</div>
    <div class="h">11</div>
    <div class="h">33123</div>
    <div class="h">33123</div>
    <div class="h">33123</div>
    <div class="h">33123</div>
    <div class="h">123</div>
    <div class="h">11</div>
    <div class="h">33123</div>
    <div class="h">33123</div>
    <div class="h">33123</div>
    <div class="h">33123</div>
    <div class="h">123</div>
    <div class="h">11</div>
    <div class="h">33123</div>
    <div class="h">33123</div>
    <div class="h">33123</div>
    <div class="h">33123</div>
    <div class="h">123</div>
    <div class="h">11</div>
    <div class="h">33123</div>
    <div class="h">33123</div>
    <div class="h">33123</div>
    <div class="h">33123</div>
  </div>
</template>

<script>
import productParam from "../components/productParam.vue";

export default {
  name: "product",
  components: {
    productParam,
  },
};
</script>

<style lang='scss'>
.product {
  .btn {
    margin-left: 10px;
  }
  .h {
    height: 100px;
    background: forestgreen;
  }
}
</style>