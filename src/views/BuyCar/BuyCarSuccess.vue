<template>
    <div id="buycarsuc">
        <!--nav-bar-->
        <nav-bar class="suc-nav">
            <van-col class="suc-left" span="6" slot="left">
                <h1>购物车</h1>
            </van-col>
            <van-col span="12" slot="center">

            </van-col>
            <van-col class="suc-right" span="6" slot="right">
                <img src="./ticket.png" alt="">
            </van-col>
        </nav-bar>

        <!--小广告-->
        <ul class="car-suc-advs">
            <li>网易自营品牌</li>
            <li>30天无忧退货</li>
            <li>48小时快速退款</li>
        </ul>
        <div class="car-suc-conent">
            <div v-if="$store.state.allproduces<=0" class="cart-img"><img src="./cart.png" alt=""><p>去添加点什么吧</p></div>
            <div v-else>
                <van-swipe-cell v-for="(produce,index) in $store.state.allproduces" :key="index">
                    <van-card
                        :num="produce.num"
                        :price="produce.price"
                        :desc="produce.desc"
                        :title="produce.title"
                        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
                    >
                        <template #footer>
                            <button @click="decrement(index)" :disabled="produce.num<=1">-</button>
                            {{produce.num}}
                            <button @click="increment(index)">+</button>
                        </template>
                    </van-card>
                    <template #right>
                        <van-button square text="删除" @click="del(index)" type="danger" class="delete-button" />
                    </template>
                </van-swipe-cell>
            </div>
        </div>
            <van-submit-bar v-show="$store.state.allproduces.length>0" :price="allPrice*100" button-text="提交订单" @submit="onSubmit">
            </van-submit-bar>
        <foot-bar></foot-bar>
    </div>
</template>

<script>
    import footBar from "../../components/footBar/footBar";
    import NavBar from "../../components/navBar/NavBar";
    export default {
        name: "BuyCarSuccess",
        components:{
            footBar,
            NavBar
        },
        methods:{
            onSubmit(){

            },
            decrement(index){
                this.$store.state.allproduces[index].num--
            },
            increment(index){
                this.$store.state.allproduces[index].num++
            },
            del(index){
                this.$store.state.allproduces.splice(index,1)
            }
        },
        data (){
            return {
                value:2,

            }
        },
        computed:{
            allPrice(){
                return this.$store.state.allproduces.reduce((pre,book)=>{
                    return pre+book.price*book.num
                },0)
            }
        }
    }
</script>

<style>
    .suc-left h1{
        font-size: .35rem;
        margin: .3rem  0 0 .5rem;
    }
    .suc-right{
        text-align: center;
        margin-top: -.2rem;
    }
    .suc-nav{
        border-bottom: 1px solid #D9D9D9;
        background-color: #FAFAFA;
    }
    .car-suc-advs{
        font-size: .2rem;
        display: flex;
        text-align: center;
        height: .8rem;
        line-height: .8rem;
        background-color:rgb(238,238,238);
    }
    .car-suc-advs li{
        flex: 1;
    }
    .car-suc-conent{
        min-height:11rem;
        background-color: rgb(244,244,244);
    }
    .cart-img{
        text-align: center;
        padding-top: 4rem;
    }
    .cart-img img{
        width:2.8rem;
    }
    .car-suc-conent p{
        font-size: .3rem;
        color: #999999;
    }
    .goods-card {
        margin: 0;
        background-color: white;
    }

    #buycarsuc .delete-button {
        height: 100%;
        border: 0;
        background-color: #EE0A24;
        color: white;
    }
    /*结算按钮*/
    #buycarsuc .van-submit-bar{
        bottom: .85rem;
    }
    /*全选按钮*/
    #buycarsuc .van-submit-bar .van-checkbox{
        margin-left: .2rem;
    }
</style>
