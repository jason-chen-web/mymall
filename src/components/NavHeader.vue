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
          <a href="javascript:;" class="cart">
            <span class="icon-cart"></span> 购物车</a
          >
        </div>
      </div>
    </div>

    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="menu-item">
            <span>小米手机</span>
            <div class="children">
              <ul >
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="menu-item">
            <span>RedMI红米手机</span>
            <div class="children"></div>
          </div>
          <div class="menu-item">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrap">
            <input type="text" name="keyword" id="" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  props: {},
};
</script>

<style lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        margin-right: 17px;
        color: #b0b0b0;
        font-style: 12px;
      }
      .cart {
        width: 110px;
        background: #ff6600;
        text-align: center;
        color: #fff;
        .icon-cart {
          @include bcg(16px, 12px, "/imgs/icon-cart-checked.png");
          // display: inline-block;
          // width: 16px;
          // height: 12px;
          // background: url("/imgs/icon-cart-checked.png") no-repeat center;
          // background-size: contain;
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      @include flex();
      .header-logo {
        overflow: hidden;
        display: inline-block;
        width: 55px;
        height: 55px;
        background: #ff6600;

        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: "";
            @include bcg(55px, 55px, "/imgs/mi-logo.png");
            // display: inline-block;
            // width: 55px;
            // height: 55px;
            // background: url('/imgs/mi-logo.png') no-repeat center;
            // background-size: contain;
            transition: margin 200ms;
          }
          &:after {
            content: "";
            @include bcg(55px, 55px, "/imgs/mi-home.png");
            // display: inline-block;
            // width: 55px;
            // height: 55px;
            // background: url(/imgs/mi-home.png) no-repeat center;
            // background-size: 55px;
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 200ms;
          }
        }
      }
      .header-menu {
        display: inline-block;
        padding-left: 209px;
        line-height: 112px;

        width: 643px;
        .menu-item {
          display: inline-block;
          font-weight: bold;
          font-size: 16px;
          color: #333333;
          padding-right: 10px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
          }
        }
      }
      .header-search {
        width: 320px;
        .wrap {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            width: 264px;
            height: 50px;
            border-right: 1px solid #e0e0e0;
            padding-left: 10px;
          }
          a {
            @include bcg(18px, 18px, "/imgs/icon-search.png");
            // display: inline-flex;
            // width: 18px;
            // height: 18px;
            // background: url("/imgs/icon-search.png") no-repeat center;
            // background-size: contain;
            margin-left: 14px;
          }
        }
      }
    }
  }
}
</style>

