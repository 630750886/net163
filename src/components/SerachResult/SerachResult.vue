<template>
  <div>
    <nav-bar>
        <van-search slot="center" v-model="value" disabled placeholder="请输入搜索关键词" @click="$router.push('/search')" />
    </nav-bar>
    <nav-bar class="shrul">
      <van-col span="8" slot="left">
        <van-dropdown-menu active-color="red"  :overlay="false">
          <van-dropdown-item title="综合" />
        </van-dropdown-menu>
      </van-col>
      <van-col span="8" slot="center">
        <van-dropdown-menu active-color="red">
          <van-dropdown-item title="价格" ref="item">
            <div class="screen">
              <span>筛选</span>
              <input placeholder="最低价" type="text">一
              <input  placeholder="最高价" type="text">

            </div>
            <div class="sort">
              <i>排序</i>
              <input class="bott" type="button" value="从低到高">
              <input class="bott" type="button" value="从高到底">
            </div>
            <div class="operation">
              <span @click="operationCel">取消</span>
              <span @click="operationOk" class="operation-ok">确定</span>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </van-col>
      <van-col span="8" slot="right">
        <van-dropdown-menu  active-color="red">
          <van-dropdown-item title="分类" active-color="red" ref="items">
            <div class="cate-search"  @click="cateClick">
              <span class="cate-all" >全部</span>
              <span>家居生活</span>
              <span>美食美酒</span>
              <span>服饰包包</span>
              <span>个人护理</span>
              <span>严选全球</span>
              <span>数码家电</span>
            </div>

          </van-dropdown-item>
        </van-dropdown-menu>
      </van-col>
    </nav-bar>
    <div class="all-products">
      <div v-show="$store.state.footlistss" class="products-list" v-for="(list,inx) in $store.state.footlistss" :key="inx">
        <div @click="$router.push('/productdetails')">
          <img :src="list.url" alt="">
          <p class="listTitle">{{list.title}}</p>
          <p class="listPrice">￥{{list.price}}</p>
        </div>
      </div>
      <div class="search_sorry" v-show="$store.state.footlistss.length<=0">没有搜到你的商品,请搜索咖啡或拖鞋</div>
    </div>

  </div>
</template>

<script>
  //向外默认暴露一个对象
  import NavBar from "../navBar/NavBar";
  import {request} from "../../network/request";

  export default {//组件里面data必须写函数，而且要有返回值return
    data () {
      return{
        value:'',
        footlist:[]
      }
    },
    components:{
      NavBar
    },
    created() {

    },
    methods:{
      operationCel(){
        this.$refs.item.toggle();
      },
      operationOk(){
        this.$refs.item.toggle();
      },
      cateClick(){
        this.$refs.items.toggle();
      }
    }
  }
</script>

<style>

.screen span{
  font-size: .3rem;
}
  .screen input{
    border: 1px solid #7F7F7F;
    height: .5rem;
    width: 1.5rem;
    margin: .3rem .1rem 0 .1rem;
    padding: 0 0rem 0 .8rem;
  }
.screen input:focus{
  border: 1px solid red;
}
.sort{
  text-align: left;
  padding-left: 10%;
}
  .sort i{
    font-style: normal;
    font-size: .3rem;
  }
.bott {
  border: 1px solid #7F7F7F;
  height: .55rem;
  width: 2rem;
  line-height: .55rem;
  background-color: white;
  margin: .2rem .1rem .2rem .2rem;

}
.bott:focus{
  border-color: red;
  color: red;
}
.operation span{
  box-sizing: border-box;
  display: inline-block;
  width: 50%;
  line-height: 1rem;
  font-size: .3rem;
  border:1px solid #D9D9D9 ;
  height: 1rem;
}
.operation-ok{
  color: red;
}
.cate-search{
  text-align: left;
}
.cate-search span{
    padding: 0 .3rem 0 .3rem;
    display: inline-block;
  font-size: .25rem;
    border: 1px solid #858585;
  margin: .2rem .3rem 0rem .2rem ;

  }
.shrul .van-col--8{
  line-height: .5rem;
}
.cate-search  .cate-all{
  color: red;
  border-color: red;
}
.shrul .van-dropdown-menu__item{
  background-color: #FAFAFA;
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
.search_sorry{
  font-size: .5rem;
  width: 80%;
  line-height: 1rem;
  text-align: center;
  margin:2rem auto 0 auto;
}
</style>
