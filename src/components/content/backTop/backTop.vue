<template>
  <div class="back-top" >
    <img src="~assets/img/common/backTop.png" alt="">
  </div>
</template>
<script>
export default {
  name:"BackTop",
  
}
</script>
<style scoped>
  .back-top{
    position: fixed;
    right:10px;
    bottom: 55px;
    background-color: rgb(243, 243, 243);
    border-radius: 45%;
  }
  .back-top img{
    width: 35px;
    height: 35px;
  }
</style>