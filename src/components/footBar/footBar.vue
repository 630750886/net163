<template>
  <div>
    <!--tab-bar-->
    <van-tabbar v-model="active" :route=true active-color="red">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category" dot>分类</van-tabbar-item>
      <van-tabbar-item icon="paid" to="/worthbuy" badge="5">值得买</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :to="$store.state.loginsucc?'/buycarsuccess':'/buycar'" badge="20">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" :to="$store.state.loginsucc?'/profilesuccess':'/profile'" badge="20">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  //向外默认暴露一个对象
  export default {//组件里面data必须写函数，而且要有返回值return
    data(){
      return{
        active:null,
      }
    },
  }
</script>

<style>

</style>
