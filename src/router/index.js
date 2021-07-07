import Vue from "vue";
import Router from "vue-router";
// 父路由
import home from "../pages/home";
//home 子路由
// home路由的三个子路由在homerouter-view里面
import index from "../pages/index";
// import detail from "../pages/detail";
// import product from "../pages/product";
// import login from "../pages/login";
// import cart from "../pages/cart";
// 父路由
// import order from "../pages/order";
// order子路由
// import OrderList from "../pages/OrderList";
// import OrderConfirm from "../pages/OrderConfirm";
// import OrderPay from "../pages/OrderPay";
// import alipay from '../pages/alipay';

Vue.use(Router);
// 在Vue上注册Router插件/ router插件挂载到vue实例上


export default new Router({
  routes: [
        // home路由群
    {
      path: "/",
      name: "home",
      component: home,
            //  /重定向到/index
      redirect: "/index",
      children: [
        {
          path: "index",
          name: "index",
          component: index
        },
        {
          path: "detail/:id",
          name: "detail",
          component: ()=>import("../pages/detail")
        },
        {
          path: "product/:id",
          name: "product",
          component: ()=>import("../pages/product")
        }
      ],
    },
    {
      path: "/login",
      name: "login",
      // component:login
      component: ()=>import("../pages/login")
    },
        // 独立cart路由
    // 购物车的界面和首页的视图不一样，所以不用根组件的视图，本来要
    // /order/cart-简化成/cart
    {
      path: "/cart",
      name: "cart",
      component: ()=>import("../pages/cart")
    },
        // order路由群
    {
      path: "/order",
      name: "order",
      component: ()=>import("../pages/order"),
      children: [
        {
          path: "confirm",
          name: "order-confirm",
          component: ()=>import("../pages/OrderConfirm")
        },
        {
          path: "list",
          name: "order-list",
          component: ()=>import("../pages/OrderList")
        },
        {
          path: "pay",
          name: "order-pay",
          component: ()=>import("../pages/OrderPay")
        },{
          path: "alipay",
          name: "alipay",
          component: ()=>import('../pages/alipay')
        }
      ],
    }
    
  ]
});
