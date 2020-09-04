<template>
  <div class="tabbar">
    <div class="collect" @click="addToCart">收藏</div>
  </div>
</template>

<script>
  export default {
    name: 'DetailTabbar',
     methods: {
      addToCart() {
        this.$emit('addToCart')
      }
    }
  };
</script>

<style scoped>
.tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  height: 49px;
}
.collect{
  background-color: #ff5777;
  height: 100%;
  color: white;
}
</style>