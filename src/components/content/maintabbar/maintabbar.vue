<template>
  <tabbar>
      <tabbaritem path="/home" >
        <!-- 具名插槽 -->
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <router-link tag="span" to="/home" slot="item-text">首页</router-link>
      </tabbaritem>
      <tabbaritem path="/category" >
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <router-link slot="item-text" tag="span" to="/category">分类</router-link>
      </tabbaritem>
      <tabbaritem path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <router-link slot="item-text" tag="span" to="/cart">购物车</router-link>
      </tabbaritem>
      <tabbaritem path="/profile" >
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <router-link slot="item-text" tag="span" to="/profile">我的</router-link>
      </tabbaritem>
    </tabbar>
</template>

<script>
import tabbar from 'components/common/tabbar/tabbar.vue';
import tabbaritem from 'components/common/tabbar/tabbarItem';
export default {
  name:'maintabbar',
  components:{
    tabbar,
    tabbaritem
  }
}
</script>

<style>

</style>