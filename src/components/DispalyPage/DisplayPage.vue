<template>
  <div class="dis-pages">
    <!--    顶部导航-->
    <van-sticky>
      <nav-bar class='nav-bar-icon'>
        <van-col name="span" span="3" class="icon-left" slot="left">
          <van-icon class="wap-icon" name="wap-home-o" @click="$router.push('/home')"/>
        </van-col>
        <van-col name="span" span="15" slot="center">
          <div>
            <h1>网易严选</h1>
          </div>
        </van-col>
        <van-col name="span" span="6" class="icon-right" slot="right">
          <van-icon class="wap-icon" name="search" @click="$router.push('/search')" />
          <van-icon @click="$router.push($store.state.loginsucc?'/buycarsuccess':'/buycar')" class="wap-icon" name="shopping-cart-o" />
        </van-col>
      </nav-bar>
    </van-sticky>
    <!--    页面轮播图-->
    <van-swipe class="dis-page" :autoplay="3000">
      <van-swipe-item  v-for="(imgurl, index) in imgurls" :key="index">
        <img :src=imgurl />
      </van-swipe-item>
    </van-swipe>
    <hr class="pd-hr" />
    <div class="dis-page-title">
      <h1>人气爆款</h1>
      <p>人气好物方向购</p>
    </div>
<!--    商品展示-->
    <div class="all-products">
      <div class="products-list" @click="$router.push('/productdetails')" v-for="(list,inx) in all_foot_list" :key="inx">
        <img :src="list.url" alt="">
        <p class="listTitle">{{list.title}}</p>
        <p class="listPrice">￥{{list.price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  //向外默认暴露一个对象
  import NavBar from "../navBar/NavBar";
  import {request} from "../../network/request";
  export default {//组件里面data必须写函数，而且要有返回值return
    components:{
      NavBar
    },
    data(){
      return {
        imgurls:[],
        all_foot_list:[]
      }
    },
    created() {
      request({
        url:'/home/imgurls'
      }).then(res=>{
        this.imgurls=res.data
        return request({url:'/SerachResult/all_foot_list'})
      }).then(res=>{
        this.all_foot_list=res.data
      })
    }
  }
</script>

<style>
.dis-page .van-swipe-item img{
  width: 100%;
  height: 3rem;
}
.dis-pages hr{
  margin-top: -.1rem;
  height: .2rem;
}
  .dis-page-title {
    text-align: center;
    padding: .3rem 0;
  }
.dis-page-title h1{
  font-size: .4rem;
}
.dis-page-title p{
  font-size: .3rem;
  margin-top: .2rem;
  color: #A9A9A9;
}
</style>
