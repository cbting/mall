<template>
  <div>
        <tab-bar>
      <tab-bar-item path="/home" activeColor="#d4237a">
        <!-- <img slot="item-icon" src="~assets" alt=""> -->

        <img slot="item-icon" src="~assets/img/tabbar/store.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/store active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#d4237a">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#d4237a">
        <img slot="item-icon" src="~assets/img/tabbar/search cart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/search cart active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#d4237a">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from '../../common/tabbar/TabBar'
  import TabBarItem from '../../common/tabbar/TabBarItem.vue'

  export default {
    name:"MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>