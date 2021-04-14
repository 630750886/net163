<template>
  <div>
    <!--    顶部导航-->
    <nav-bar class='nav-bar-icon cart-nav-title'>
      <van-col  class="icon-left" span="3" slot="left">
        <van-icon class="wap-icon" name="wap-home-o" @click="goHome" />
      </van-col>
      <van-col  span="15" slot="center">
        <div>
          <h1>网易严选</h1>
        </div>
      </van-col>
      <van-col class="icon-right"  span="6" slot="right">
        <van-icon class="wap-icon" name="search" @click="$router.push('/search')" />
        <van-icon class="wap-icon" name="shopping-cart-o"  />
      </van-col>
    </nav-bar>
    <div class="cart-center">
      <img src="./logo.png" alt="">
      <div>
        <van-button type="danger" block class="mobile-login" @click="goLogin"><span class="cart-icon"><van-icon name="phone-o" /></span>手机号快捷登录</van-button>
        <van-button type="danger" block class="email-login" @click="emaillog"><span class="cart-icon"><van-icon name="envelop-o" /></span>邮箱账号登录</van-button>
      </div>
      <div class="bottm-icon">
        <span class="iconfont icon-QQ">QQ</span>|<span class="iconfont icon-weixin">微信</span>|<span class="iconfont icon-weibo">微博</span>
      </div>
    </div>
  </div>
</template>

<script>
  //向外默认暴露一个对象
  import NavBar from "../navBar/NavBar";
  export default {//组件里面data必须写函数，而且要有返回值return
    methods:{
      goHome(){
        this.$router.push('/home')
      },
      goLogin(){
        this.$router.push('/login')
      },
      emaillog(){
        this.$router.push('/emaillogin')
      }
    },
    components:{
      NavBar
    }
  }
</script>

<style>
  .cart-nav-title{
    background: white;
  }
  .cart-nav-title h1{
    font-weight: bolder;
    font-size: .4rem;
  }
  .cart-center{
    text-align: center;
    background: #F2F5F4;
    border-top: 1px solid #D9D9D9;


  }
  .cart-center img{
    margin: 1.5rem 0 .5rem 0;
    height:1rem;

  }
  .mobile-login,.email-login{
    margin: 0 auto .4rem auto;
    width: 6.5rem;
    height: 1rem;
    font-size: .3rem;
  }
  .mobile-login{
    background-color: #DD1A21;
  }
  .email-login{
    background: transparent;
    color: red;
  }
  .cart-icon{
    font-size:.5rem;
    margin-right: .2rem;
    vertical-align: -7px;

  }
  .bottm-icon{
    font-size: .4rem;
    margin-top: 5.5rem;
    padding-bottom:.95rem;
  }
  .bottm-icon span{
    font-size: .3rem;
    margin: 0 .3rem 0 .3rem;

  }
</style>
