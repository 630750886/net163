<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
  // @ is an alias to /src
  import Home from "./views/Home/Home";
  export default{
    components:{
      Home
    }
  }

</script>
<style>
</style>
