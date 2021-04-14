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
        <van-icon class="wap-icon" name="shopping-cart-o" @click="$router.push('/buycar')" />
      </van-col>
    </nav-bar>
    <div class="login-center clearfix">
      <img src="./logo.png" alt="">
      <div class="login-form">
        <form action="">
          <div class="moblie-number clearfix"><input v-model="phone" maxlength="11" type="text" placeholder="请输入手机号码"><span @click="empty" v-show="phone" class="empty">X</span></div>
          <div class="veif-code"  v-if="isShow"><input v-model="phonecode" type="text" placeholder="请输入短信验证码" maxlength="6"><span class="gain-code" @click="gainCode" v-show="iscode">获取验证码</span><span class="gain-code" v-show="down">倒计时{{count}}秒</span></div>
          <div class="pwd" v-else><input v-model="password" type="password" placeholder="请输入密码" maxlength="24"></div>
          <p class="log-massge" v-show="isMassge">{{massge}}</p>
          <div class="pwd-login" v-if="isShow"><span class="diff" >遇到问题？</span><span class="switch-x" @click="switchLogin">使用密码验证</span></div>
          <div class="pwd-login" v-else><span class="diff" >遇到问题？</span><span class="switch-x" @click="switchLogin">短信快捷登录</span></div>
          <div class="sign-login"><input @click="submit"  type="button" value="登录"></div>
          <div class="agree" v-show="isShow"><van-checkbox v-model="checked" shape="square">我同意<a href="">《服务条款》</a>和<a href="#">《网易隐私政策》</a></van-checkbox></div>
          <div class="other-login" @click="otherLogin">其他登录方式></div>
          <div>登录状态{{$store.state.loginsucc}}</div>
        </form>
      </div>
      <div class="bottm-icon">

      </div>
    </div>
  </div>
</template>

<script>
  //向外默认暴露一个对象
  import NavBar from "../navBar/NavBar";
  import { Toast } from 'vant';

  export default {//组件里面data必须写函数，而且要有返回值return
  data (){
    return {
      value: '',
      phone:'',
      checked:false,
      isShow:true,
      massge:'',
      isMassge:false,
      count:0,
      down:false,
      iscode:true,
      phonecode:'',
      password:''
    }
  },
    methods:{
    // 获取验证码
      gainCode(){
      let phone=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
        if(phone.test(this.phone)){
          Toast.success('验证码获取成功');
          this.isMassge=false
          this.down=true
          this.iscode=false
          this.count=30
          if(!this.count<=0){
            const  intervalId=setInterval(()=>{
              this.count--
              if (this.count<=0){
                clearInterval(intervalId)
                this.down=false
                this.iscode=true
              }
            },1000)
          }
        }else {
          this.isMassge=true
         this.massge='请输入正确的手机号'

        }
      },
      submit(){
        let phone=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
        let phonecode=/[0-9]{6}$/
        if(phone.test(this.phone) && (phonecode.test(this.phonecode) || this.password) && this.checked){
          Toast.success('登录成功');
          this.$store.commit('singin',this.phone)
          this.isMassge=false
          this.$router.push('/profilesuccess')
        }else if(!this.checked){
          this.isMassge=true
          this.massge='请同意协议'
        }else{
          this.isMassge=true
          this.massge='请输入正确的手机号或验证码'
        }

      },
    goHome(){
      this.$router.push('/home')
    },
      empty(){
      this.phone=''
      this.isMassge=false
      },
      switchLogin(){
      this.isShow=!this.isShow
        if(!this.isShow){
          this.checked=true
        }

      },
      otherLogin(){
        this.$router.push('/loginpage')
      },
  },
    components:{
      NavBar
    }
  }
</script>

<style>

  .login-center{
    text-align: center;
    height: 5rem;
  }
  .login-center img{
    margin: 1rem 0 .5rem 0;
    height:1rem;

  }
.login-form{
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
  .moblie-number,.veif-code,.pwd{

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
  /*清空图标*/
  .empty{
    background:#A9A9A9;
    display: inline-block;
    width:14px;
    height:14px;
    border-radius:7px;
    position: relative;
    right: .5rem;
    top: .3rem;
    float: right;
    color: white;
  }
  /*获取验证码*/
  .gain-code{
    display: inline-block;
    width: 2rem;
    height:.55rem;
    line-height: .55rem;

    top: -.8rem;
    left: -.4rem;
    border: 1px solid #BFBFBF;
    position: relative;
    float: right;
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
  .diff{
    margin-right: 3rem;
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
  .agree{
    margin-top: .3rem;

  }
  .agree a{
    color: #0F82FF;

  }
  .other-login{
    width: 100%;
    margin-top: .8rem;
    font-size: .3rem;
  }
  .cart-nav-title{
    border-bottom: 1px solid #D9D9D9;
    background-color: #FAFAFA;
  }
  .log-massge{
    margin:.1rem 0 0 -2rem;
    color: red;
  }
</style>
