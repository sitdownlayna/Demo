<template>
  <div class="goodslist">
    <goods-list-item v-for="(item, index) in goodsList" :key="index" :goods="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodListItem";

export default {
  name: "GoodList",
  components: {
    GoodsListItem
  },
  props: {
    goodsList: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>