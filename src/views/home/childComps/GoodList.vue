<template>
  <div class="goodslist">
    {{goodsList}}
  </div>
</template>

<script>
  export default {
    name: 'GoodList',
    components: {},
    props: {
      goodsList: {
        type: Array,
        default: []
      }
    }
  };
</script>

<style scoped>
.goodslist{
  position: absolute;
}
</style>