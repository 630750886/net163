<template>
  <div>
<!--    顶部导航-->
      <van-sticky>
        <nav-bar class='nav-bar-icon'>
          <van-col name="span" span="3" class="icon-left" slot="left">
            <van-icon class="wap-icon" name="wap-home-o" @click="goHome"/>
          </van-col>
          <van-col name="span" span="15" slot="center">
            <div>
              <h1>值得买</h1>
            </div>
          </van-col>
          <van-col name="span" span="6" class="icon-right" slot="right">
            <van-icon class="wap-icon" name="search" @click="$router.push('/search')" />
            <van-icon @click="goshopp" class="wap-icon" name="shopping-cart-o" />
          </van-col>
        </nav-bar>
      </van-sticky>
    <div id="wbuy-coment">
        <!--      标题区-->
        <div class="wbuy-coment-title">
           <span class="title-one">值得买 </span>
            <span class="title-des">严选好物 用心生活</span>
        </div>
<!--        顶部轮播-->
        <van-swipe class="topSwipe">
            <van-swipe-item>
                <van-grid :border="false" :column-num="4" class="">
                    <van-grid-item v-for="(list1,index) in goods_list1" :key="index">
                        <img :src="list1.url" alt="">
                        <div class="top-swipe-text">{{list1.text1}}</div>
                        <div class="top-swipe-text2">{{list1.text2}}</div>
                    </van-grid-item>
                </van-grid>
            </van-swipe-item>
            <van-swipe-item>
                <van-grid :border="false" :column-num="4">
                    <van-grid-item v-for="(list2,index) in goods_list2" :key="index">
                        <img :src="list2.url" alt="">
                        <div class="top-swipe-text">{{list2.text1}}</div>
                        <div class="top-swipe-text2">{{list2.text2}}</div>
                    </van-grid-item>
                </van-grid>
            </van-swipe-item>
        </van-swipe>
<!--        商品列表-->
        <div class="productList">
          <van-row type="flex" justify="space-between">
            <van-col name="span" span="12" class="productList-right">
              <div class="min-list" v-for="(conList,index) in conListimg" :key="index">
                <img :src="conList.url" alt="">
                <p class="discribe">{{conList.discribe}}</p>
                <div class="authors">
                  <div class="author">
                    <img :src="conList.author.url1" alt="">
                    {{conList.author.name}}
                    <span class="browse">浏览量{{conList.author.views}}</span>
                  </div>
                </div>
              </div>
            </van-col>
            <van-col name="span" span="12" class="productList-left">
              <div class="min-list" v-for="(conList,index) in conListimg2" :key="index">
              <img :src="conList.url" alt="">
              <p class="discribe">{{conList.discribe}}</p>
                <div class="authors">
                  <div class="author">
                    <img :src="conList.author.url1" alt="">
                    {{conList.author.name}}
                    <span class="browse">浏览量{{conList.author.views}}</span>
                  </div>
                </div>
            </div>
            </van-col>
          </van-row>

        </div>
     </div>



<!--    底部导航-->
    <foot-bar></foot-bar>
  </div>
</template>

<script>
  //向外默认暴露一个对象
  import footBar from "../../components/footBar/footBar";
  import NavBar from "../../components/navBar/NavBar";
  import {request} from "../../network/request";

  export default {//组件里面data必须写函数，而且要有返回值return
    methods:{
      goHome(){
        this.$router.push('/home')
      },
      goshopp(){
        if(this.$store.state.loginsucc===true){
          this.$router.push('/buycarsuccess')
        }else {
          this.$router.push('/buycar')
        }
      }
    },
    created() {
      request({
        url: '/WorthBuy/goods_list1'
      }).then(res=>{
        this.goods_list1=res.data
        return request({url: '/WorthBuy/goods_list2'})
      }).then(res=>{
        this.goods_list2=res.data
        return request({url: '/WorthBuy/con_list_img'})
      }).then(res=>{
        this.conListimg=res.data
        return request({url: '/WorthBuy/con_list_img2'})
      }).then(res=>{
        this.conListimg2=res.data
      })
    },
    components:{
      footBar,
      NavBar,
    },
      data () {
        return{
            goods_list1:[],
            goods_list2:[],
            conListimg:[],
            conListimg2:[],
        }
      }
  }
</script>

<style>
  /*顶部导航*/
.wap-icon{
  font-size: .5rem;
  margin: 0 .2rem 0 .2rem;

}
.nav-bar-icon{
  text-align: center;
  vert-align: middle;
}
.nav-bar-icon h1{
  font-size: .35rem;
  margin-top: .4rem;
}
 #wbuy-coment{
      background-image: url("http://yanxuan.nosdn.127.net/a93a392fb8006ba26dea38477979b7b4.jpg?imageView");
     background-size: 8rem;
     background-color:rgb(238,238,238) ;
     background-repeat: no-repeat;

  }
  .wbuy-coment-title{
      margin: 0 0 .2rem 0;
  }
  .title-one{
      font-size: .5rem;
      color: white;
      margin-left: .4rem;
  }
  .title-des{font-size: .3rem;color: white;}
  .topSwipe{
      width: 90%;
      margin: 0 auto;
     border-radius: .2rem;
  }
  .topSwipe img{
      width: 1.3rem;
  }
  .top-swipe-text{
      font-size: .25rem;
      margin-top: .1rem;
  }
  .top-swipe-text2{
      font-size: .05rem;
      margin-top: .1rem;
      color: #A9A9A9;
  }
  /*商品列表*/
  .productList{
      width: 90%;
      margin: 0 auto;
      margin-top: .3rem;


  }

  .productList{
   padding: 0;
    background-color:rgb(238,238,238) ;
    align-items: center;
    background:transparent;


  }
  .productList .van-col--12{
    width:auto ;
  }
  .productList .van-row{
    background:transparent;
  }
  .min-list{
    width:3.3rem;
    background-color: white;
    border-radius: .2rem;
    overflow: hidden;
    margin-top: .15rem;
  }

  .min-list img{
    width: 100%;

  }
  .author{
    margin: .3rem 0 .3rem 0;
    font-size: .1rem;
    color: #A9A9A9;
  }
  .author img{
    width: .4rem;
    border-radius: .5rem;
    margin : 0 .05rem -.1rem .1rem;

  }
  .discribe{
    font-size: .25rem;
    margin: .1rem .1rem 0 .1rem;
  }
  .browse{
    padding-left: .3rem;
  }
  /*.author img{*/
  /*  width: 18px;*/
  /*}*/
</style>
