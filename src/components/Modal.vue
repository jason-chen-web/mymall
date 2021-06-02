<template>
  <!-- showModal可以放index.vue,为了配合transition才放这里 -->
  <div class="modal" v-show="showModal">
    <div class="mask"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span>提示</span>
        <a href="javascript:;" class="icon-close"></a>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <div class="btn-group">
          <a href="javascript:;" class="btn">确定</a>
          <a href="javascript:;" class="btn">取消</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    // 弹框类型：小small 中middle 大large 表单form
    modalType: {
      type: String,
      // 默认值
      default: "form",
    },
    // 标题
    title: String,
    // 按钮类型：1确定按钮 2取消按钮 3 确定取消都有
    btnType: String,
    // 确定按钮文本
    sureText: {
      type: String,
      default: "确定",
    },
    // 取消按钮文本
    cancelText: {
      type: String,
      default: "取消",
    },
    showModal: Boolean,
  },
};
</script>
<style lang="scss">
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
@import "../assets/scss/modal.scss";
</style>