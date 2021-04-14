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
            <h1>网易严选</h1>
          </div>
        </van-col>
        <van-col name="span" span="6" class="icon-right" slot="right">
          <van-icon class="wap-icon" name="search" @click="$router.push('/search')" />
          <van-icon @click="goshopp" class="wap-icon" name="shopping-cart-o" />
        </van-col>
      </nav-bar>
    </van-sticky>
<!--    商品轮播图-->
    <van-swipe @change="onChange" class="imgDeta-list" :autoplay="3000">
      <van-swipe-item v-for="(img,inx) in imgDetails" :key="inx">
        <img :src="img" alt="">
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/5</div>
      </template>
    </van-swipe>
<!--    特价倒计时-->
    <div class="count-down">
      <div class="count-down-left">
        <img src="./4.11logo.png" alt="">
      </div>
      <div class="count-down-center">
        <p class="price">单价仅￥9.95</p>
        <p>￥19.9任选2件</p>
      </div>
      <div class="count-down-right">
        <p>距结束</p>
        <p>5天2小时</p>
      </div>
    </div>
    <div class="products-reviews">
      <p class="price">￥14.9</p>
      <div>
        <span class="products-tltle">轻弹云朵男女居家拖鞋</span>
        <span class="products-comment">查看评价》</span>
      </div>
      <p class="recommend-reason">推荐理由</p>
      <div class="reason">
        <div><span class="serial-number">1</span><span>柔软EVA，仿佛踩在云朵上</span></div>
        <div><span class="serial-number">2</span><span>轻便随型，真正无负担</span></div>
          <div><span class="serial-number">3</span> <span>米粒纹面，贴脚舒适不易打滑</span></div>
      </div>


    </div>
    <hr class="pd-hr" />
<!--    邮费，面99元免邮-->
    <div class="showPopup">
      <van-cell is-link @click="showPopup"><span>邮费，面99元免邮</span></van-cell>
      <van-popup v-model="showPostage" closeable position="bottom" :style="{ height: '30%' }">
        <p> 满99元免邮</p>
        <p>  本商品由严选自营仓发货，</p>
        <p> 单笔订单金额（不含邮费）大陆地区满99元免邮费，</p>
        <p>  不满99元收取8元邮费；港澳台地区满500元免邮费，</p>
        <p> 不满500元收取30元邮费；海外地区以下单页提示运费为准。</p>

      </van-popup>
    </div>
<!--    关于购物返回馈金-->
    <div class="showPopup">
      <van-cell is-link @click="showPopupR"><span>返积分</span></van-cell>

    <van-popup v-model="showRebate" closeable position="bottom" :style="{ height: '30%' }">

     <p> 关于购物返回馈金：</p>
      <p> 1. 回馈金是严选用以回馈用户的代币</p>
      <p> 2. 回馈金可与现金1:1抵扣使用</p>
      <p> 3. 回馈金使用无门槛，可叠加</p>
      <p>  4. 购物即可返还回馈金，用户等级越高，返还比例越高</p>
      <p>  5. 本月获取的回馈金，统一在次月25日23:59:59失效，请尽快使用</p>
      <p> 6. 可在个人中心--回馈金中查看回馈金资产</p>
      <p>  7. 部分特殊商品和订单不支持返还回馈金，具体以回馈金的活动说明为准</p>
      <p> 8. 如有疑问，请联系严选在线客服</p>
    </van-popup>
    </div>
    <hr class="pd-hr" />
<!--    请选择规格数量-->
    <div class="showPopup">
      <van-cell is-link @click="showPopupS"><span>请选择规格数量</span></van-cell>
      <van-popup v-model="showSpec" closeable position="bottom" :style="{ height: '30%' }">
      </van-popup>
    </div>
<!--    配送至-->
    <div class="showPopup">
      <van-cell  is-link @click="showPopupD"><span>配送至: {{carmodel}}</span></van-cell>
      <van-popup v-model="showDis" position="bottom" :style="{ height: '30%' }">
        <van-area
          value="110000"
          :item-height="30"
          :area-list="areaList"
          @change="tChange"
          @confirm="confirmOk"
          @cancel="showDis = false"
        />
      </van-popup>
    </div>
    <hr class="pd-hr" />
<!--    小广告-->
    <div>
      <img class="pro-adv" src="./adv.jpg" alt="">
    </div>
    <hr class="pd-hr" />
<!--    用户评论-->
    <!--    请选择规格数量-->
    <div class="showPopup user-coms">
      <van-cell title="用户评论" is-link value="查看全部" />
    </div>
    <div class="user-com">
      <div class="user-com-info">
        <img class="user-info-img" src="./user-head.png" alt="">
        <span>185***366</span>
        <van-rate v-model="starvalue" readonly />
        <p class="com-data">2021-04-10 09:46:22浅粉色; 女M</p>
        <p class="com-cont">这款居家拖鞋轻便不粘脚，透气，很适合夏季穿着。另外严选的换货也不错，换好的鞋子</p>
        <img  class="user-com-img" src="./com.jpg" alt="">
      </div>
    </div>
    <hr class="pd-hr" />
    <div class="pro-det">
      <h1>商品参数</h1>
      <p><span>适合人群-----------</span>通用</p>
      <p><span>功能-----------</span>&nbsp;&nbsp;&nbsp;&nbsp;速干、防水、防滑</p>
      <p><span>适用季节-----------</span>&nbsp;&nbsp;&nbsp;&nbsp;四季</p>
      <p><span>尺码-----------</span>&nbsp;&nbsp;&nbsp;&nbsp;S、M、L、XL</p>
      <p><span>适用场景-----------</span>&nbsp;&nbsp;&nbsp;&nbsp;卧室、浴室</p>
      <p><span>底型厚度-----------</span>&nbsp;&nbsp;&nbsp;&nbsp;轻薄</p>
      <p><span>鞋型-----------</span>&nbsp;&nbsp;&nbsp;&nbsp;凉拖鞋</p>
    </div>
    <div class="img-det" v-for="(img,inx) in imgDetails" :key="inx">
      <img :src="img" alt="">
    </div>
    <div class="have-problem">
      <h1>一、网易严选的订单如何配送？</h1>
      <p>网易严选会根据商品所在地、顾客所在地和商品的尺寸重量优选物流配送商，确保优质用户体验。目前暂不支持自选快递，具体物流信息可在下单成功后“我的订单-追踪物流”中查看。</p>
      <h1>二、如何申请退换货？</h1>
      <p>支持无忧退换货的商品，自收到商品之日起在无忧退换货期限内，顾客可申请无忧退换货；食品、定作类商品、贴身衣物、积分兑换等特殊商品，无质量问题不支持退换货；</p>
      <h1>三、食品类商品什么情况下支持退换？</h1>
      <p>请在签收后，第一时间检查商品。如果商品有腐坏、破损等情况请把商品和快递面单一起拍照并在24小时内联系客服申请理赔，不能提供符合要求的照片或未能在24小时内联系客服，将不予退货退款处理；</p>
      <h1>四、如何开具发票？</h1>
      <p>.请在下单时选择“我要开发票”并填写相关信息（APP仅限2.4.0及以上版本）。开具增值税专用发票需在下单时填写增票资质信息。温馨提示：请确保增票资质信息与贵司税务登记证信息一致，避免因开票信息错误给贵司带来损失。</p>
    </div>
    <div class="maybe">
      <h1>一 可能喜欢 一</h1>
      <div class="all-products">
        <div class="products-list" v-for="(list,inx) in footlist" :key="inx">
          <img :src="list.url" alt="">
          <p class="listTitle">{{list.title}}</p>
          <p class="listPrice">￥{{list.price}}</p>
        </div>
      </div>
    </div>
    <div class="footer-clot"></div>
<!--    底部购物框-->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon @click="goshopp" icon="cart-o"  text="购物车" />
      <van-goods-action-button @click="addShopCart" type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
  //向外默认暴露一个对象
  import NavBar from "../navBar/NavBar";
  import { areaList } from '@vant/area-data';
  import Vue from 'vue';
  import { Toast } from 'vant';
  Vue.use(Toast);
  export default {//组件里面data必须写函数，而且要有返回值return

    components:{
      NavBar
      },
    methods:{
      goHome(){
        this.$router.push('/home')
      },
      addShopCart(){
        if(this.$store.state.loginsucc){
          Toast.success('成功添加购物车');
          this.$store.state.allproduces.push({num:1,price:14,desc:'成功',title:'添加的商品'})
        }else {
          this.$router.push('/login')
        }

      },
      goshopp(){
        if(this.$store.state.loginsucc===true){
          this.$router.push('/buycarsuccess')
        }else {
          this.$router.push('/buycar')
        }
      },
      onChange(index) {
        this.current = index;
      },
      showPopup() {
        this.showPostage = true;
      },
      showPopupR() {
        this.showRebate = true;
      },
      showPopupS() {
        this.showSpec = true;
      },
      showPopupD() {
        this.showDis = true;
      },
      tChange (picker, value) {
        this.carmodels=value
      },
      confirmOk(){
        this.carmodel=this.carmodels[0].name+this.carmodels[1].name+this.carmodels[2].name
        this.showDis =false;
      }

    } ,
    data() {
      return {
        starvalue:4,
        current: 0,
        carmodels:'',//接收数据
        carmodel:'',//保存数据
        showPostage:false,
        showRebate:false,
        showDis:false,
        showSpec:false,
        imgDetails:[require('./img/1.png'),require('./img/2.png'),require('./img/3.png'),require('./img/4.png'),require('./img/5.png')],
        areaList,
        footlist:[
          {
            title:'轻弹云朵男女居家拖鞋',
            url:require('./footimg/1.png'),
            price:25
          },{
            title:'简约清爽速干居家拖鞋',
            url:require('./footimg/2.png'),
            price:12
          },
          {
            title:'舒适按摩居家拖鞋',
            url:require('./footimg/3.png'),
            price:34
          },
          {
            title:'室外两穿型加厚软底拖鞋',
            url:require('./footimg/4.png'),
            price:19
          },
          {
            title:'轻弹云朵男女居家拖鞋',
            url:require('./footimg/1.png'),
            price:25
          },{
            title:'简约清爽速干居家拖鞋',
            url:require('./footimg/2.png'),
            price:12
          },
          {
            title:'舒适按摩居2222222222家拖鞋',
            url:require('./footimg/3.png'),
            price:34
          },
          {
            title:'室外两穿型加厚软底拖鞋',
            url:require('./footimg/4.png'),
            price:19
          }
        ]
      };
    },
  }
</script>

<style>
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  .imgDeta-list img{
    width: 100%;
    height: 100%;
  }
  /*倒计时*/
  .count-down{
    width: 100%;
    height: 1.3rem;
    background-color: #DD1A21;
    margin-top: -.1rem;
    display: flex;
  }
  .count-down-left img{
    height: 1.3rem

  }
  .count-down-center p{
    font-size: .4rem;
    font-weight: bolder;
    color: white;
    margin-left: .2rem;
  }
  .count-down-center .price{
    font-weight: normal;
    font-size: .3rem;
    margin: .2rem 0 .2rem .25rem;
  }
  .count-down-right p{
    font-size: .25rem;
    margin: .45rem 0 0 2rem;
    color: white;
    text-align: right;
    line-height: .01rem;
  }
  /*评论与详情*/
  .products-reviews{
    padding: .3rem;
  }
  .products-reviews .price{
    font-size: .6rem;
    color: #DD1A21;
    font-weight: bolder;
    margin: 0 0 -.2rem 0;
  }
  .products-reviews .products-tltle{
    font-size: .4rem;
    font-weight: bolder;
  }
  .products-reviews .products-comment{
    font-size: .3rem;
    margin-left: 1.2rem;
  }
  .recommend-reason{
    font-size: .3rem;
    margin: .2rem 0 .2rem 0;
    color: #A9A9A9;

  }
  .reason{
    height: 1.4rem;
    width: 100%;
    background-color: #FAFAFA;
  }
  .reason div{
    margin-top: .1rem;
  }
  .reason{
    font-size: .3rem;
    padding: .3rem 0 .2rem 0;
  }
  .serial-number{
    display: inline-block;
    height: .3rem;
    width: .3rem;
    text-align: center;
    border-radius: .2rem;
    border: 1px solid red;
    margin: 0 .1rem 0 .3rem;
  }
  .pd-hr{
    height: .3rem;
    background-color:#F4F4F4;
    border: 1px solid #F4F4F4;
    margin:0;
  }
  .showPopup{
    border-bottom: 1px solid #D9D9D9;
    font-size: .3rem;


    width: 100%;
  }
  .showPopup span {
    margin: 0 1.8rem 0 .2rem;
  }
  /*图片广告*/
  .pro-adv{
    width: 100%;
    margin-bottom:-.1rem;
  }
  /*用户评论*/
  .user-coms .van-cell__value span{
    margin: 0;
  }
  .user-com{
    padding: .2rem .3rem 0 .3rem;
  }
  .user-com-info span{
    margin: 0 .2rem 0 .1rem;
    font-size: .35rem;
  }
  .user-com-info .com-data{
    font-size: .3rem;
    margin: .2rem 0 0 .2rem;
    color:#A9A9A9;
  }
  .user-com-info .com-cont{
    font-size: .3rem;
    margin: .2rem 0 .2rem ;
    display: block;
    line-height: .5rem;
  }
  .user-com-info .user-info-img{
    width: .8rem;
    border-radius: .5rem;
    vertical-align: -.2rem;
  }
  .user-com-info .user-com-img{
    height:2rem;
    width: 2rem;

  }
/*商品详情*/
  .pro-det{
    padding-top: .5rem;
    margin: 0 .3rem 0 .3rem;
  }
  .pro-det h1{
    border-bottom: 1px dashed #A9A9A9;
    padding: .2rem 0 .2rem 0;
    font-size: .4rem;
  }
  .pro-det p{
    border-bottom: 1px dashed #A9A9A9;
    padding: .2rem 0 .2rem 0;
    font-size: .3rem;
  }
  .pro-det p:last-child{
    border: 0;
  }
  .pro-det span{
    color: #A9A9A9;
  }
  .img-det img{
    width: 100%;
  }
  .have-problem{
    padding: .5rem;
  }
  .have-problem h1{
    font-size: .35rem;
    color: #F01526;
    margin: .2rem 0 .2rem 0;
  }
  .have-problem p{
    font-size: .3rem;
    line-height: .5rem;
    color: #A9A9A9;

  }
  /*商品*/
  .all-products{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap-reverse;
  }
  .products-list{
    width: 3.4rem;
    margin-top: .3rem;

  }
  .products-list img{
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .listTitle{
    font-size: .3rem;
    margin: .2rem 0 .2rem 0;
  }
  .listPrice{
    font-size: .3rem;
    color: red;
  }
  .maybe h1{
    font-size: .5rem;
    text-align: center;
    margin: .2rem 0 .3rem 0;
  }
  .footer-clot{
    height: 2rem;
  }
</style>
