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
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click='login'>登录</a>
          <a href="javascript:;" v-if="username">退出</a>
          <a href="javascript:;" v-if="username">我的訂單</a>

          <a href="javascript:;" class="cart" @click="goToCart">
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
              <ul>
                <li
                  class="product"
                  v-for="(item, index) of phoneList"
                  :key="index"
                >
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price }}元</div>
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
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" alt="" />
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-3.png'" alt="" />
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" alt="" />
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'" alt="" />
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">2699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.png" alt="" />
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
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
  data() {
    return {
      username: "jack",
      phoneList: [],
    };
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    login(){
      this.$router.push(
        '/login'
      )
    },
    getProductList() {
      this.$axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 6,
          },
        })
        .then((res) => {
          this.phoneList = res.list;
        });
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
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
      position: relative;
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
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 220px;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            height: 0;
            opacity: 0;
            overflow: hidden;
            transition: 500ms;
            text-align: center;
            background-color: #fff;
            z-index: 11;

            .product {
              float: left;
              width: 16.6%;
              height: 220px;
              font-style: 12px;
              line-height: 12px;
              z-index: 10;
              // background-color: #ffffff;
              position: relative;
              &:after {
                content: "";
                position: absolute;
                top: 28px;
                right: 0;
                width: 1px;
                height: 99px;
                border-right: 1px solid #d7d7d7;
              }
              &:last-child:after {
                display: none;
              }

              a {
                display: inline-block;
                text-align: center;
                .pro-img {
                  height: 137px;
                  img {
                    margin-top: 26px;
                    height: 111px;
                    width: auto;
                  }
                }
                .pro-name {
                  margin-top: 19px;
                  margin-bottom: 8px;
                  font-weight: bold;
                  color: $colorB;
                }
                .pro-price {
                  color: $colorA;
                }
              }
            }
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

