<template>
  <div class="home">
<!--    nav-bar-->
      <van-sticky>
        <nav-bar>
          <van-col span="7" slot="left">
            <img class="logo" src="../../assets/logo.png" alt="">
          </van-col>
          <van-col slot="center">
            <div class="serch" @click="search">
              <i class="iconfont icon-search" />搜索商品，共14585个好物
            </div>
          </van-col>
          <van-col  span="4" slot="right" v-show="!$store.state.loginsucc">
            <div class="sign" @click="$router.push('/login')">登录</div>
          </van-col>
        </nav-bar>
    <!--    Tab滑动标签-->
        <van-tabs class="home-tabs">
          <van-tab v-for="(tab,index) in tabs" :title="tab" :key="index">
    <!--        内容 {{tab}}-->
          </van-tab>
        </van-tabs>
      </van-sticky>
<!--    页面轮播图-->
    <van-swipe id="homeswipe" :autoplay="3000">
      <van-swipe-item v-for="(imgurl, index) in imgurls" :key="index">
        <img :src=imgurl />
      </van-swipe-item>
    </van-swipe>
    <!--tab-bar-->
    <foot-bar></foot-bar>
    <!--小广告-->
    <van-row>
      <van-col span="8" v-for="(adv,index) in advs" :key="index">
        <i>
          <img :src="adv.url" alt="">
        </i>
        <span>{{adv.text}}</span>
      </van-col>
    </van-row>
<!--    10宫格-->
    <van-grid square :column-num="5" :border=false>
      <van-grid-item class="goods_list" v-for="(goods,index) in goods_list" :key="index">
        <img @click="$router.push('/displaypage')" :src="goods.url" alt="">
          <div>{{goods.text}}</div>
      </van-grid-item>
    </van-grid>
<!--    首单全额返-->
      <div class="snap_up">
          <a href="">
              <img class="once" src="https://yanxuan.nosdn.127.net/b0a6736d513a81f86b4652f04aff95c7.gif?imageView&quality=75&type=jpg" alt="">
          </a>
          <a href="">
              <img class="two" src="https://yanxuan.nosdn.127.net/6bb286bd8fe031d8710afcc38759e656.png?quality=75&type=webp&imageView&thumbnail=375x0" alt="">
          </a>
          <a href="">
              <img class="two" src="https://yanxuan.nosdn.127.net/8d0f83e62e535ce801df10c383c748f7.png?quality=75&type=webp&imageView&thumbnail=375x0" alt="">
          </a>
          <a href="">
              <img class="tree" src="https://yanxuan.nosdn.127.net/4823ea9fa97a4fc55e510b4031f3c694.png?quality=75&type=webp&imageView&thumbnail=750x0" alt="">
          </a>
      </div>
<!--    新人专享礼-->
      <div id="unique-new-peopel">
        <div class="unique-title"><h1>—新人专享礼—</h1></div>
        <van-row type="flex" justify="space-between">
          <van-col>
            <div class="content-left">
              <span>新人专享礼包</span>
              <img src="./img/money.png" alt="">
            </div>
          </van-col>
          <van-col class="content-right">
            <div class="right-top">
              <div class="min-div-left">
                <span>福利特区</span>
                <p>今日特价</p>
              </div>
              <div class="min-div-right">
                <img src="./img/towel.webp" alt="">
              </div>
            </div >
            <div class="right-bottom">
              <div class="min-div-left">
                <span>今日特价</span>
                <p>1元起包邮</p>
              </div>
              <div>
                <img src="./img/recom.webp" alt="">
              </div>

            </div>
          </van-col>
        </van-row>
      </div>
      <div id="footer">
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <p>网易公司版权所有 © 1997-2021</p>
        <p>食品经营许可证：JY13301080111719</p>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import footBar from "../../components/footBar/footBar";
import NavBar from "../../components/navBar/NavBar";
import {request} from "../../network/request";

export default {
  name: 'Home',
  data(){
    return{
      value:'',
      tabs:null,
      imgurls:null,
      advs:null,
      goods_list:null
    }
  },
  created() {
    request({
      url:'/home/tabs',
    }).then(res=>{
      this.tabs=res.data
      return  request({url: '/home/imgurls'})
    }).then(res=>{
      this.imgurls=res.data
      return  request({url: '/home/advs'})
    }).then(res=>{
      this.advs=res.data
      return  request({url: '/home/goods_list'})
    }).then(res=>{
      this.goods_list=res.data
    })
  },
  components: {
    footBar,
    NavBar
  },
  methods:{
    search(){
      this.$router.push('/search')
    }
  }
}
</script>
<style>
  .logo{
    width: 1.8rem;height: .5rem;
    margin: 0 0.1rem 0 0.1rem;
  }
  .serch{
    min-width: 4rem;
    background-color:#EDEDED;
    margin-top: .3rem;
    border-radius: .1rem;
    height: .6rem;
    color: #858585;
    line-height: .55rem;
    font-size: .25rem;
  }
  .serch i{
    font-size: .34rem;
    margin: 0 .1rem 0 .2rem;
  }
  .van-row{
    margin-top: -.1em;
      background-color:#fff;

  }

  .sign{
    font-size:.2rem;
    border: 1px solid red;
    color: red;
    width: .8rem;
    text-align: center;
    line-height: .4rem;
    height: .4rem;
    border-radius: .1rem;
    margin: .4rem 0 0 .5rem ;
    margin-left: .2rem;
  }
  .van-tab{
    height: .5rem;
    font-size: .2rem;
  }
  .home-tabs .van-tabs__nav--line{
    height:.7rem;
    padding-top: -.2rem;
    margin-top: -.2rem;
  }
.van-tabs--line .van-tabs__wrap{
    height: .6rem;
  }
  #homeswipe .van-swipe-item img{
    width: 100%;
    height: 4.0rem;
  }
  .van-col--8{
    font-size: .1rem;
    line-height: .8rem;
    text-align: center;
  }
  .van-col--8 img{
    width:17px;
    vertical-align: middle;
  }
  .goods_list{
      font-size: .1rem;
      margin-bottom: 24px;
  }
  .goods_list img{
      width: 55px;
      margin-bottom: 5px;
  }
  .snap_up{
      text-align: center;
    background-color: #eee;
  }
    .snap_up .once{
        height: 3.2rem;
    }
  .snap_up .two{
      width:3.4rem;
      margin: 0 .1rem 0 .1rem;
  }
  .snap_up .tree{
     height:.94rem;
  }
  #unique-new-peopel{
    width: 100%;
   padding: .1rem 0 .4rem 0;
    border-bottom: .3rem solid #eee;
  }
  #unique-new-peopel .unique-title{
    font-size: .4rem;
    text-align: center;
    padding: .2rem;
  }
  .content-right{
    margin-right: .29rem;
  }
  .content-left{
    width: 3.15rem;
    margin-left: .28rem;
    background-color: #F9E9CF;
    text-align: center;
    height: 4.34rem;
    border-radius: .1rem;
  }
  .content-left img {
    width:2.5rem;
    margin: .2rem 0 .2rem 0;
    display: inline-block;
  }
  .content-left span{
    font-size: .35rem;
    margin-left: -.8rem;

  }
  .right-top{
    background-color: #FBE2D3;
    text-align: center;
    padding-left: .5rem;

  }
  .right-bottom{
    background-color: #FFECC2;
    padding-left: .5rem;
    margin-top: .05rem;

  }
  .right-top,.right-bottom{
    display: flex;
    border-radius: .1rem;

  }
  .right-top img,.right-bottom img{
    width: 2rem;

  }
  .right-bottom span,.right-top span{
    font-size: .3rem;
  }
  .right-bottom p,.right-top p{
    font-size: .2rem;
    color: #A9A9A9;

  }
  .right-top p{

  }
  .right-bottom p{
    color: white;
    background-color: #CBB693;
    padding: 2px;
  }
  #footer{
    height: 4rem;
    background-color:#414141;
    text-align: center;
  }
  #footer p{
    font-size: .25rem;
    line-height: .4rem;
    color: #999;

  }
  #footer .van-button{
    margin: .8rem .5rem .4rem .5rem;
    border: 1px solid #999;
    background-color: #414141;
    border-radius: .1rem;
    width: 2rem;
  }
</style>
