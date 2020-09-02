<template>
  <div class="content" v-if="havegoods">
    <div class="introduce">{{goods.title}}</div>
    <div class="price">
      <span class="nowprice">{{goods.newPrice}}</span>
      <span class="oldprice">{{goods.oldPrice}}</span>
    </div>
    <div class="sellinfo">
      <span class="info">{{goods.columns[0]}}</span>
      <span class="info">{{goods.columns[1]}}</span>
      <span class="info">{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="sellservice" >
      <span class="service" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeadInfo",
  data() {
    return {
      havegoods: false
    }
  },
  props:{
    goods: {
      //从父组件获取的数据
      type: Object,
      default(){
        return {};
      }
    }
  },
  computed: {
    
  },
  watch: {
    goods(newval, oldval){
      this.havegoods = true;
    }
  },
  methods: {
    
  },
  beforeCreate() {
    
  },
  created() {
    
  },
  mounted() {
    
  }
};
</script>

<style scoped>
.content{
  position: relative;
  padding-top: 20px;
}
.introduce{
  font-size: 15px;
  color: black;
  padding-bottom: 20px;
}
.price{
  padding-bottom: 20px;
}
.nowprice{
  color: #ff5777;
  font-size: 25px;
  position: relative;
}
.oldprice{
  font-size: 15px;
  color: gray;
  text-decoration: line-through;
}
</style>