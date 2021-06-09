import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions'

Vue.use(Vuex);
const state = {
    username:'',//登录成功用0-不成功用10
    cartCount:0//购物车商品数量

}
// Store挂载到vuex实例上

export default new Vuex.Store({
    state,
    mutations,
    actions
})