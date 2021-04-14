import Vue from 'vue'
import Vuex from 'vuex'
import actions from "./actions";
import mutations from "./mutations";
import modules from "./modules";
Vue.use(Vuex)
const state={
loginsucc:false,
  phone:'',
  emaillNum:'',
  footlistss:[],
  allproduces:[
    {
      num:2,
      price:20,
      desc:'描述信息',
      title:'商品标题'
    },
    {
      num:5,
      price:38,
      desc:'描述信息',
      title:'商品标题'
    },
    {
      num:8,
      price:26,
      desc:'描述信息',
      title:'商品标题'
    }
  ]
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules
})
