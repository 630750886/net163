<template>
  <div>
   <!-- 搜索 -->
    <nav-bar>
      <van-col span="24" slot="center" class="categserchs">
        <div class="cateSearch" @click="$router.push('/search')">
          <i class="iconfont icon-search" />搜索商品，共14585个好物
        </div>
      </van-col>
    </nav-bar>
    <van-tree-select :items="items" :main-active-index.sync="active">
      <template #content>
<!--        周年庆-->
        <div id="anniversary" v-if="active === 0">
          <van-swipe :touchable=false :autoplay="2000">
            <van-swipe-item v-for="(swipe, index) in swipeUrl" :key="index">
              <img :src=swipe />
            </van-swipe-item>
          </van-swipe>
          <!--    9宫格-->
          <van-grid square :column-num="3" :border=false class="categs">
            <van-grid-item class="goods_list categ" v-for="(categ,index) in categList" :key="index">
              <img :src="categ.url" alt="">
              <div>{{categ.text}}</div>
            </van-grid-item>
          </van-grid>
        </div>
        <!--        家具生活-->
        <div v-if="active === 1">
          <div class="banner">
            <img src="https://yanxuan.nosdn.127.net/761877bc4e2cf50d7c424a8a7e6378bf.jpg?quality=75&type=webp&imageView&thumbnail=0x196" alt="">

          </div>
          <span id="span">床品件套</span>
            <!--    9宫格-->
            <van-grid square :column-num="3" :border=false class="lifts">
              <van-grid-item class="goods_list lift" v-for="(lift,index) in categLift" :key="index">
                <img :src="lift.url" alt="">
                <div>{{lift.text}}</div>
              </van-grid-item>
            </van-grid>
        </div>
      </template>
    </van-tree-select>

    <foot-bar></foot-bar>
  </div>
</template>

<script>
  //向外默认暴露一个对象
  import footBar from "../../components/footBar/footBar";
  import NavBar from "../../components/navBar/NavBar";
  import {request} from "../../network/request";

  export default {//组件里面data必须写函数，而且要有返回值return
    data (){
      return{
        value:'',
        active: 0,
        items:[],
        swipeUrl:[],
        categList:[],
        categLift:[]
      }
    },
    created() {
      request({
        url:'/category/items'
      }).then(res=>{
        this.items=res.data
        return request({url:'/category/swipe_url'})
      }).then(res=>{
        this.swipeUrl=res.data
        return request({url:'/category/categ_list'})
      }).then(res=>{
        this.categList=res.data
        return request({url:'/category/categ_lift'})
      }).then(res=>{
        this.categLift=res.data
      })
    },
    components:{
      footBar,
      NavBar
    }
  }
</script>

<style>
  .cateSearch{
    width:90%;
    background-color:#EDEDED;
    margin:.2rem auto .1rem auto;
    border-radius: .1rem;
    height: .6rem;
    color: #858585;
    line-height: .55rem;
    font-size: .25rem;
  }
  .cateSearch i{
    font-size: .4rem;
    margin: 0 .1rem 0 24%;
  }
  .van-sidebar-item--select{
    color:red;
  }
  .van-tree-select__nav,.van-sidebar-item{
    background-color: white;
    text-align: center;
    font-size: .3rem;
  }
  .van-sidebar-item{
    padding: .3rem;
  }
  .van-tree-select__nav{
    border-right: 1px solid #ededed;
    border-top: 1px solid #ededed;
    height: 12rem;

  }

  .van-tree-select__content{
    border-top: 1px solid #ededed;
    height: 12rem;
  }

  .van-sidebar-item--select::before{
    height: 25px;
  }
  #anniversary{
    text-align: center;
  }
  #anniversary .van-swipe-item img{
    height: 2rem;
    width: 90%;
    margin-top: .2rem;
  }
  /*van-grid-item__content van-grid-item__content--center*/
  .categs{
    margin-top: .4rem;
  }
  .categ img{
    width: 80px;
  }
  .banner{
    text-align: center;
  }
  #span{
    display: block;
    font-size: .28rem;
    font-weight: bold;
    margin: .3rem 0 .3rem .2rem;
  }
  .banner img{
    width: 4.5rem;
    margin-top: .2rem;
  }
  .lift img{
    width: 100px;
    margin: .3rem 0 -.1rem 0;
  }
  .lifts{
    overflow: hidden;
    height:9rem;
    border-top: 1px solid #ededed;
  }
</style>
