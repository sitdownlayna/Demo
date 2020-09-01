<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: {}
    };
  },
  mounted() {
    this.$nextTick(function(){
      this.__initScroll();
    })
  },
  methods: {
    __initScroll() {
      // 1.初始化BScroll对象
      if (!this.$refs.wrapper) return;
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        click: true
      });
    }
  }
};
</script>

<style scoped>
</style>