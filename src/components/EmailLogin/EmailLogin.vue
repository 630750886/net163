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
        <van-icon class="wap-icon" name="shopping-cart-o" />
      </van-col>
    </nav-bar>
    <div class="login-center clearfix">
      <img src="./logo.png" alt="">
      <div class="email-form">
        <form action="">
          <div class="moblie-number clearfix"><input v-model="emaillNum" type="text" placeholder="请输入邮箱账号"></div>
          <div class="pwd"><input type="password" v-model="password" placeholder="请输入邮箱密码" maxlength="24"></div>
          <p class="massge" v-show="isMassge">{{massge}}</p>
          <div class="pwd-login"><span class="diff" >忘记密码</span><span class="switch-x">注册账号</span></div>
          <div class="sign-login"><input @click="submit"  type="button" value="登录"></div>
          <div class="other-login" @click="otherLogin">其他登录方式></div>
        </form>
      </div>
      <div class="bottm-icon">

      </div>
    </div>
  </div>
</template>

<script>
  //向外默认暴露一个对象
import NavBar from '../navBar/NavBar'
  import {Toast} from "vant";

  export default {//组件里面data必须写函数，而且要有返回值return
    data (){
      return {
        emaillNum:'',
        password:'',
        massge:'',
        isMassge:false
      }
    },
    methods:{
      submit(){
        let emaillNum=/^([a-zA-Z0-9]+[_|_|\-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
        if(emaillNum.test(this.emaillNum) && this.password){
          Toast.success('登录成功');
          this.$store.commit('emailsingin',this.emaillNum)
          this.$router.push('/profilesuccess')
          this.isMassge=false
        } else{
          this.isMassge=true
          this.massge='请输入正确的邮箱或密码'
        }

      },
      goHome(){
        this.$router.push('/home')
      },
      otherLogin(){
        this.$router.push('/loginpage')
      },
      empty(){
        this.mobnum=''
      },
      switchLogin(){
        this.isShow=!this.isShow
      }
    },
    components:{
      NavBar
    }
  }
</script>

<style>

  .login-center{
    text-align: center;
  }
  .login-center img{
    margin: 1rem 0 .5rem 0;
    height:1rem;

  }
  .email-form{
    margin-left:.5rem;
    margin-right:.5rem ;
    font-size: .1rem;
  }
  .moblie-number input,.veif-code input{
    width:80%;
    font-size: .3rem;
    box-sizing: border-box;
    margin-left: -.7rem;
    padding-right: 1.5rem;
    height: 1rem;

  }
  .moblie-number,.pwd{

    border-bottom: 1px solid #F2F5F4;
  }
  .pwd input{
    width:80%;
    font-size: .3rem;
    box-sizing: border-box;
    margin-left: -.7rem;
    padding-right: 1.5rem;
    height: 1rem;
  }

  .clearfix{
    content: '';
    display: block;
    clear: bottom;
  }
  .pwd-login{
    margin:.8rem 0 0 0;
    font-size: .3rem;
    text-align: justify;
    color: #A9A9A9;
  }
  .email-form .diff{
    margin-right:4rem;
  }
  /*登录按钮*/
  .sign-login input{
    width: 100%;
    height: .9rem;
    font-size: .4rem;
    margin-top: .5rem;
    background: #DD1A21;
    color: white;
  }

  .other-login{
    width: 100%;
    margin-top: .8rem;
    font-size: .3rem;
  }
  .massge{
    margin:.1rem 0 0 -3.5rem;
    color: red;
  }
</style>
