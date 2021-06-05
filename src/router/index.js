import Vue from "vue";
import Router from "vue-router";

import home from "../pages/home";
import index from "../pages/index";
import detail from "../pages/detail";
import product from "../pages/product";
import login from "../pages/login";


import cart from "../pages/cart";

import order from "../pages/order";
import OrderList from "../pages/OrderList";
import OrderConfirm from "../pages/OrderConfirm";
import OrderPay from "../pages/OrderPay";

import alipay from '../pages/alipay';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
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
          component: detail
        },
        {
          path: "product/:id",
          name: "product",
          component: product
        }
      ],
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/cart",
      name: "cart",
      component: cart
    },
    {
      path: "/order",
      name: "order",
      component: order,
      children: [
        {
          path: "confirm",
          name: "order-confirm",
          component: OrderConfirm
        },
        {
          path: "list",
          name: "order-list",
          component: OrderList
        },
        {
          path: "pay",
          name: "order-pay",
          component: OrderPay
        }
      ],
    },{
      path: "/alipay",
      name: "alipay",
      component: alipay
    }
    
  ]
});
