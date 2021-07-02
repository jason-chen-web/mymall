<template>
  <!-- // 首页,最终嵌套到home的router-view里 -->
  <div class="index">
    <div class="container">
      <!-- 轮播 -->
      <div class="swiper-box">
        <!-- 菜单 -->
        <div class="nav-menu">
          <!-- 父级 -->
          <ul class="menu-wrap">
            <!-- 子项 -->
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <!-- hover后的显示项 -->
              <!-- 定义二维数组-循环两次,横向循环6次，纵向循环4次 -->
              <div class="children">
                <ul v-for="(item, i) of menuList" :key="i">
                  <li v-for="(sub, j) of item" :key="j">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img
                        v-lazy="sub ? sub.img : '/imgs/item-box-1.png'"
                        alt=""
                      />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) of slideList" :key="index">
            <a :href="'/#/product/' + item.id">
              <img :src="item.img" />
            </a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!-- 广告位 -->
      <div class="ads-box">
        <a
          :href="'/#/product/' + item.id"
          v-for="(item, index) of adsList"
          :key="index"
        >
          <img v-lazy="item.img" alt="" />
        </a>
      </div>
      <!-- banner位 -->
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="" />
        </a>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="product-box">
      <div class="container">
        <!-- 标题 -->
        <h2>手机</h2>
        <!-- 定义大结构，里面左右结构 -->
        <div class="wrapper">
          <!-- 左侧区 -->
          <div class="banner-left">
            <a href="/#/product/35">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt="" />
            </a>
          </div>
          <!-- 右侧区 -->
          <div class="list-box">
            <!-- 横向循环两次纵向循环4次 -->
            <div class="list" v-for="(arr, i) of phoneList" :key="i">
              <div class="item" v-for="(item, j) of arr" :key="j">
                <span :class="{ 'new-pro': j % 2 == 0 }">新品</span>
                <!-- 'new-pro'-key和j%2==0-value，只不过value我们写的是一个判断，取布尔值 -->
                <div class="item-img">
                  <img v-lazy="item.mainImage" alt="" />
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.subtitle }}</p>
                  <p class="price" @click="addCart(item.id)">
                    <!-- 调用接口时需要传参id所以要加item.id -->
                    {{ item.price }}元
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="middle"
      :showModal="showModal"
      @submit="goToCart"
      @cancel="showModal = false"
    >
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </modal>
  </div>
</template>

<script>
// 引入部分组件
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
// 引入swiper样式
import ServiceBar from "../components/ServiceBar";
import Modal from "../components/Modal";
export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    Modal,
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-5.jpg",
        },
      ],
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro",
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区",
          },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png",
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg",
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png",
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg",
        },
      ],
      phoneList: [
        // [1, 1, 1, 1],
        // [1, 1, 1, 1],
      ],
      showModal: false,
    };
  },
  mounted() {
    // 初始化,加载商品列表
    this.init();
  },
  methods: {
    init() {
      // 门户-产品接口
      // 从products数据库拿params数据
      this.$axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 14,
            // 前六条上面用，后8条下面用
          },
        })
        .then((res) => {
          res.list = res.list.slice(6, 14);
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        });
    },
    addCart(id) {
      this.$axios
        .post("/carts", {
          productId: id,
          // 加入购物车时就已经是选中状态
          selected: true,
        })
        .then((res) => {
          // 加购物车成功后会弹框
          this.showModal = true;
          this.$store.dispatch("saveCartCount", res.cartTotalQuantity);
        })
        .catch(() => {
          // this.showModal= true;
        });
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style lang='scss'>
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.index {
  .swiper-box {
    .nav-menu {
      width: 264px;
      height: 451px;
      position: absolute;
      z-index: 10;
      padding: 26px 0;
      background: #55585a78;
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            display: block;
            position: relative;
            &:after {
              position: absolute;
              top: 17.5px;
              right: 30px;
              content: "";
              @include bcg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 964px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            left: 264px;
            top: 0;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
                a {
                  color: $colorB;
                  font-size: 14px;
                }
                img {
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
              }
            }
          }
        }
      }
    }
    .swiper-container {
      .swiper-button-prev {
        left: 274px;
      }
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 50px;
  }
  .product-box {
    background: $colorJ;
    padding: 30px 0 50px;
    .wrapper {
      display: flex;
      .banner-left {
        width: 224px;
        height: 619px;
        margin-right: 16px;
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            // display: flex;
            // flex-direction: column;
            // justify-content: center;
            // align-items: center;
            width: 236px;
            height: 302px;
            background: $colorG;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-style: 14px;
              line-height: 24px;
              color: #fff;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                height: 195px;
                width: 100%;
              }
            }
            .item-info {
              h3 {
                font-size: 14px;
                color: #333333;
                line-height: 14px;
                font-weight: bold;
              }
              p {
                color: #999999;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: 14px;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  content: "";
                  @include bcg(22px, 22px, "/imgs/icon-cart-hover.png");
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
    h2 {
      font-size: 22px;
      height: 21px;
      line-height: 21px;
      color: #333333;
      margin-bottom: 20px;
    }
  }
}
</style>