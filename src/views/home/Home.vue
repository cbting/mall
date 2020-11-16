<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
    

  </div>
</template>

<script>
  import NavBar from 'components/common/navigationBar/NavigationBar'
  import {getHomeMultiData} from 'network/home'
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name:"home",
    components: {
      NavBar,
      Swiper,
      SwiperItem
    },
   
    data(){
      return {
        // result: null
        banners:[],
        recommends: []
      }
    },
    created(){
      getHomeMultiData().then(res =>{
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        // console.log(res.data);
        // console.log(this.banners);

      })
    }
  }
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>