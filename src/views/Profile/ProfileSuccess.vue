<template>
    <div>
        <div class="profile">
            <div class="info">
                <van-icon class="info-head" name="user-circle-o" />
                <div class="info-user">
                    <p class="info-user1">用户{{$store.state.phone  || $store.state.emaillNum || $router.push('/login')}}</p>
                    <p>普通用户</p>
                </div>
            </div>
        </div>
        <div class="profileContent">
            <div class="my-money">
                我的资产
            </div>
            <van-grid class="money-ify" :border="false" :column-num="5">
                <van-grid-item >
                    <p class="my-amount">￥0</p>
                    <p class="am-describe">余额</p>
                </van-grid-item>
                <van-grid-item>
                    <p class="my-amount">5</p>
                    <p class="am-describe">红包</p>
                </van-grid-item>
                <van-grid-item>
                    <p class="my-amount">2</p>
                    <p class="am-describe">优惠券</p>
                </van-grid-item>
                <van-grid-item>
                    <p class="my-amount">￥0</p>
                    <p class="am-describe">津贴</p>
                </van-grid-item>
                <van-grid-item>
                    <p class="my-amount">0</p>
                    <p class="am-describe">礼品卡</p>
                </van-grid-item>
            </van-grid>
            <div class="suc-advs">
                <img class="adv-car" src="./img/adv-car.png" alt="">
                <img class="adv-2" src="./img/adv-2.png" alt="">
                <span>| 花6立得48</span>
                <a href="#" class="time-limit">限时开通</a>
            </div>
            <hr />
            <van-grid class="suc-umenuitem" :column-num="3">
                <van-grid-item class="suc-umenuitem" v-for="value in 13" :key="value" icon="photo-o" text="文字" />
            </van-grid>
        </div>
        <hr class="out-hr-top" />
        <div class="log-out" @click="logOut">退出登陆</div>
        <hr class="out-hr-bottom" />
        <foot-bar></foot-bar>
    </div>
</template>

<script>
    import footBar from "../../components/footBar/footBar";
    import {Toast} from "vant";

    export default {
        name: "ProfileSuccess",
        components:{
            footBar,
        },
        methods:{
            logOut(){
                this.$router.push('/login')
                this.$store.commit('singout')
                Toast.success('退出登录成功');
            }
        }
    }
</script>

<style scoped>
    .profile{
        height: 2.8rem;
        background-color: rgb(243,203,127);
    }
    .info{
        padding-top: .4rem;
        color:#eeeeee;
        font-size: 1.5rem;

    }
    .info-head{
        vertical-align: -.3rem;
        margin: 0 .2rem 0 .3rem;
    }
    .info-user{
        display: inline-block;
        font-size: .2rem;
        color:rgb(255,255,255);

    }
    .info-user p{
        margin-top: .2rem;

    }
    .info-user1{
        font-size: .4rem;
    }
    /*内容区*/
    .my-money{
        font-size: .3rem;
        height: 1rem;
        line-height: 1rem;
        margin-left: .3rem;
        border-bottom: 1px solid rgb(217,217,217);
    }
    .money-ify{
        font-size: .25rem;
    }
    .money-ify p{
        margin-top: .1rem;
    }
    .suc-advs{
        width: 95%;
        margin: 0 auto;
        height: .9rem;
        background-color: rgb(255,246,244);
        border: 1px solid rgba(252,224,222);
        border-radius: .15rem;
        font-size: .2rem;
        line-height: .9rem;
    }
    .adv-car{
        height: .5rem;
        vertical-align: -.14rem;
        margin: 0 .1rem 0 .25rem;
    }
    .adv-2{
        height: .35rem;
        vertical-align: -.08rem;
    }
    .time-limit{
        margin-left: 2rem;
        display: inline-block;
        height: .4rem;
        line-height: .4rem;
        width: 1.2rem;
        text-align: center;
        color: white;
        border-radius: .18rem;
        background-color: rgb(221,26,33);

    }
    hr{
        height: .3rem;
        background-color: rgb(238,238,238);
        border:rgb(238,238,238) ;
        margin: .3rem 0 0 0;
    }
    .suc-umenuitem{
        border: 1px solid rgb(238,238,238);
    }
    /*退出登陆*/
    .log-out{
        border: 0;
        width: 100%;
        font-size: .3rem;
        height: .6rem;
        line-height: .8rem;
        text-align: center;
        background-color: white;
    }
    .out-hr-top{
        height: .4rem;
        margin: 0;
    }
    .out-hr-bottom{
        margin-bottom: 1rem;
    }
</style>
