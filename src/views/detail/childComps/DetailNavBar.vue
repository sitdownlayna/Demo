<template>
  <nav-bar>
    <img slot="left" class="left" src="~assets/img/common/back.svg"  @click="backHome"/>
    <div slot="center" class="center">
      <span v-for="(item, index) in titleInfos" :key="index" >{{item}}</span>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  data() {
    return {
      titleInfos: ["商品", "参数", "评论", "推荐"]
    };
  },
  components: {
    NavBar
  },
  methods: {
    backHome() {
      this.$router.back();
      console.log("a");
    }
  },
};
</script>
<style scoped>
.left{
  padding-top: 11px;
  padding-left: 13px;
}
.center{
  display: flex;
  justify-content: space-around;
}
</style>