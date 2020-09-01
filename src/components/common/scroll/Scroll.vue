<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {throttle} from "@/common/tool"
export default {
  name: "Scroll",
  data() {
    return {
      scroll: {}
    };
  },
  mounted() {
    this.$nextTick(function(){
      this.initScroll();
    })
  },
  methods: {
    initScroll() {
      if (!this.$refs.wrapper) return;
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        click: true
      });
    },
    refresh(){
      // throttle(this.scroll.refresh())();
      // console.log("refres");
      this.scroll.refresh();
    }
  }
};
</script>

<style scoped>
</style>