<template>
  <div>
    <login-page></login-page>
  </div>
</template>

<script>
  //向外默认暴露一个对象
  import LoginPage from "../../components/LoginPage/LoginPage";
  export default {//组件里面data必须写函数，而且要有返回值return
    components:{
      LoginPage
    }
  }
</script>

<style>

</style>
