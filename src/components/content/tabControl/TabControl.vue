<template>
  <div class="tab-control">
    <div class="tab-control-item" :class="{active: index == currentIndex}" v-for="(item, index) in titles" :key="item" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
	export default {
    name: "TabControl",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        defaule(){
          return []
        }
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index;
        this.$emit("itemClick",index)
      }
    },
	}
</script>

<style scoped>
.tab-control{
  display: flex;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
}
.tab-control-item{
  flex: 1;
  text-align: center;
}
.active{
  color: #ff5777;
}
.active span{
  padding: 5px;
  border-bottom: 2px solid #ff5777;
}
</style>
