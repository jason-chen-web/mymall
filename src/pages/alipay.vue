<template>
  <div class="ali-pay">
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: "alipay",
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: "",
    };
  },
  mounted() {
    this.paySubmit();
  },
  methods: {
    paySubmit() {
      this.$axios.post("/pay", {
        orderId: this.orderId,
        orderName: "无名商城",
        amount: 0.01,//单位元
        payType: 1,//1支付宝，2微信
      }).then(res=>{
        this.content=res.content
      });
    },
  },
};
</script>

<style>
</style>