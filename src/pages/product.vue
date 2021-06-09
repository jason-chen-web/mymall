<template>
  <div class="product">
    <product-param>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
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
}
</style>