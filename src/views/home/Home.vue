<template>
  <div id="home" class="wrapper">
    <navbar><span slot="middle">蘑菇街</span></navbar>
    <div id="homeswiper">
      <HomeSwiper :imgbanner="banners"></HomeSwiper>
    </div>
  </div>
</template>

<script>
import homeGetMultidata from "network/homeRequest";

import navbar from "components/common/navigator/nav";
import HomeSwiper from "views/home/childComps/HomeSwiper"

export default {
  name: "Home",
  components: {
    navbar,
    HomeSwiper
  },
  data(){
   return {
     banners:[],
     recommands:[],
   }
  },
  // 在组件创建成功后就开始发送请求
  created() {
    homeGetMultidata().then(res => {
      console.log(res);
      this.banners = res.data.data.banner.list;
      this.recommands = res.data.data.recommend.list
    }).catch(err => {
      throw new Error(err)
    })
  },
};
</script>

<style>
.navbar {
  background: pink;
  color: white;
}
</style>
