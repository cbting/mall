<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item"></goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from './goodsListItem'

export default {
  name:"GoodsLsit",
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
  .goods {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		padding: 0 6px;
	}
</style>