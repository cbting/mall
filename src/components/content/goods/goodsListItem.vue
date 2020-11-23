<template>
  <div class="goods-item" @click="itemClick">
		<!-- <img :src="showImg" class="goods-list-img" @load="itemImgLoad">
		<div class="goods-list-text">
			<div class="goods-list-name one-txt-cut">{{goodsItem.title}}</div>
			<div class="goods-list-price">
				<div class="text-pink">{{goodsItem.price}}</div>
				<div><i class="collect-icon"></i><span>{{goodsItem.cfav}}</span></div>
			</div>
		</div> -->
    <!-- <img @load="imgload" :src="showImg" v-lazy="showImage" :key="showImage" > -->
     <img  :src="showImg">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
	</div>
</template>
<script>
export default {
  name:"GoodsListItem",
  props:{
    goodsItem:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    // itemImgLoad() {
    //   // if(this.$route.path.indexOf('/home') >=0){
    //   // 	this.$bus.$emit('homeItemImgLoad');
    //   // }else if(this.$route.path.indexOf('/detail') >=0){
    //   // 	this.$bus.$emit('detailItemImgLoad');
    //   // }
    //   this.$bus.$emit('itemImgLoad');
    //   // console.log('this.$route.path.indexOf');
    // },
    // itemLink() {
    //   this.$router.push('/detail/' + this.goodsItem.iid)
    // }
    itemClick(){
      const iid = this.goodsItem.iid
      this.$router.push({path: '/detail',query: {iid}})
    },
    imgLoad(){
      this.$bus.$emit('imgLoad')
    }
  },
  computed: {
    showImg(){
      return this.goodsItem.image || this.goodsItem.show.img || this.goodsItem.img;
    }
  }
}
</script>
<style  scoped>
/* // .goods-list-item {
// 		width: 49%;
// 		height: auto;
// 		padding-top: 6px;
// 		font-size: 14px;
// 		.goods-list-img{
// 			width: 100%;
// 			height: auto;
// 			border-radius: 4px;
// 		}
// 		.goods-list-price {
// 			display: flex;
// 			justify-content: space-between;
// 			margin: 6px 0;
// 			.collect-icon {
// 				display: inline-block;
// 				width: 20px;
// 				height: 20px;
// 				background: url(~assets/img/home/collect_icon.png) no-repeat;
// 				background-size: cover;
// 				vertical-align: bottom;
// 			}
// 		}
// 	} */
  .goods-item{
    width: 49%;
    padding-bottom: 40px ;
    position: relative;
  }
  .goods-item img{
    width:100%;
    border-radius: 5px;
  }
	
  .goods-info{
    font-size:12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis; /* 溢出文本用。。。表示 */
    white-space: nowrap;  /* 规定段落中的文本不进行换行： */
    margin-bottom: 3px;
  }
  .goods-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect{
    position: relative;
  }
  .goods-info .collect::before{
    content:'';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url(~assets/img/home/collect_icon.png) 0 0/14px 14px;
  }

</style>