<template>
  <div class="goodslistitem" @click="goDetail">
    <img :src="goods.show.img"/>
    <div class="goodsinfo">
      <p>{{goods.title}}</p>
      <span class="price">￥{{goods.price}}</span>
      <span class="cfav">{{goods.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  components: {},
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    goDetail(){
      let id = this.goods.iid;
      this.$router.push({path: "/detail",query:{id}});
      // router-link内部调用这个push
      // 声明式路由:<router-link :to="...">
      // 编程式路由:router.push(...)
    }
  },
};
</script>

<style scoped>
.goodslistitem {
  width: 46%;
  height: 266px;
}
.goodslistitem img{
  width: 100%;
  border-radius: 5px;
}
.goodsinfo {
  font-size: 12px;
  padding: 5px 0;
  text-align: center;
}
.goodsinfo p{
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 2px;
}
.price{
  margin-right: 20px;
  color: #ff5777;
}
.cfav{
  position: relative;
}
.cfav::before{
  content: '';
  width: 14px;
  height: 14px;
  position: absolute;
  top: -1px;
  left:-14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>