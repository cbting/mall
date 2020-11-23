<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <home-swiper :banners="banners"></home-swiper>    

      <recommend-view :recommends="recommends"></recommend-view>

      <feature-view></feature-view>

      <tab-control class="tab-control" 
                    :titles="['流行','新款','精选']"
                    @tabClick="tabClick"></tab-control>

      <!-- <goods-list :goods="goods[currentType].list"></goods-list> -->
      <goods-list :goods="showGoods"/>
    </scroll>

    <back-top @click.native="backUp" v-show="isShow"/>




    <!-- ul>li{hi$} * 50 -->

    

  </div>
</template>

<script>
  import NavBar from 'components/common/navigationBar/NavigationBar'
  import Scroll from 'components/common/scroll/scroll'

  import TabControl from 'components/content/tabControl/tabControl'
  import GoodsList from 'components/content/goods/goodsList'
  import BackTop from 'components/content/backTop/backTop'


  import HomeSwiper from './childComps/homeSwiper'
  import RecommendView from './childComps/recommendView'
  import FeatureView from './childComps/featureView'


  import {getHomeMultiData,getHomeGoods} from 'network/home'

  export default {
    name:"home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
   
    data(){
      return {
        // result: null
        banners:[],
        recommends: [],
        goods:{
          'pop':{page:0, list:[]},
          'new':{page:0, list:[]},
          'sell':{page:0, list:[]},
        },
        currentType:'pop' ,
        isShow: false
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created(){
      this.getHomeMultiData()

      this.getHomeGoods('pop')    
      this.getHomeGoods('new')    
      this.getHomeGoods('sell')      
    },
    methods:{ 
      /**
       * 事件监听相关的方法
       */
      tabClick(index){
        switch(index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'

        }
      },
      backUp(){
        // this.$refs.scroll.scroll.scrollTo(0,0,500)
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position){
        console.log(-position.y);
        this.isShow = (-position.y) > 1000
      },
      /**
       * 网络请求相关的方法
       */
      getHomeMultiData(){
        getHomeMultiData().then(res =>{
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
      
        getHomeGoods(type,page).then(res =>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
          // console.log(res);
      })
      }
    }
  }
</script>

<style scoped>
#home{
  padding-top: 44px;
  height: 100vh;
  position: relative;
}

.home-nav{
  background-color: var(--color-tint);
  color: #fff;

  position:fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;
}
.tab-control{
  position: sticky;
  top: 44px;
  z-index: 5;
}

.content{
  /* height: 200px; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

/* .content{
  margin-top: 44px;
  height: calc(100% - 44px- 49px);
} */
</style>