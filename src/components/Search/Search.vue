<template>
  <div>
    <nav-bar class="nav-search">
        <form  class="center-search" action="/" slot="center">
          <van-search
              v-model="value"
              show-action
              placeholder="请输入商品名称"
              @search="onSearch"
              @cancel="onCancel"
          />
        </form>
    </nav-bar>
    <div>
      <div class="history-search" v-show="isHistory">
        <h1>历史搜索</h1>
        <span class="first-order">新人首单0元购</span>
        <span>月饼</span>
        <span>口罩</span>
        <span>耳机</span>
        <span>四件套</span>
        <span>杯子</span>
        <span>人工座椅</span>
        <span>洗衣液</span>
      </div>
      <div class="hot-search">
        <h1>热门搜索</h1>
        <span class="first-order">新人首单0元购</span>
        <span>月饼</span>
        <span>口罩</span>
        <span>耳机</span>
        <span>四件套</span>
        <span>杯子</span>
        <span>人工座椅</span>
        <span>洗衣液</span>
      </div>
    </div>
  </div>
</template>

<script>
  //向外默认暴露一个对象
  import NavBar from "../navBar/NavBar";
  import {request} from "../../network/request";

  export default {//组件里面data必须写函数，而且要有返回值return
    components:{
      NavBar
    },
    data (){
      return{
        value:'',
        isHistory:false,
        search_data:[],
      }
    },
    created() {
      request({url:'/SerachResult/all_foot_list'
      }).then(res=>{
        this.search_data=res.data
      })
    },
    methods:{

      onSearch(val) {
        this.$store.state.footlistss=this.search_data.filter(item=>{
          if (item.title.includes(val)){
            return item
          }
        })
        setTimeout(()=>{
          this.$router.push('/serachresult')
        },1000)
      },

      onCancel() {
        this.$router.back()
      },
    },
    computed:{

    }
  }
</script>

<style>
 .hot-search h1,.history-search h1{
   font-size: .3rem;
   margin: 0rem 0 -.3rem 0;
   color: #999999;

 }
 .hot-search,.history-search{
  padding: .4rem;
   margin: 0 auto;
 }
 .history-search{
   border-bottom: .3rem solid #eee;
 }
 .hot-search{
   border-bottom: 9.45rem solid #eee;
 }
 .hot-search span,.history-search span{
   font-size: .2rem;
   display: inline-block;
   padding: .1rem;
   margin:0 .5rem -.1rem 0rem  ;
   border: 1px solid #999999;
   border-radius: .1rem;
 }
 .hot-search .first-order{
  color: red;
   border-color: red;
 }
</style>
