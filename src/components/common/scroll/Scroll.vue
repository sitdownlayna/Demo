<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { throttle } from "@/common/tool";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: {}
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.initScroll();
    });
  },
  methods: {
    initScroll() {
      if (!this.$refs.wrapper) return;
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        scrollY: true,
        click: true,
        pullUpLoad: true
      });

      this.scroll.on("scroll", pos => {
        this.$emit("scroll", pos);
      });

      this.scroll.on("pullingUp", () => {
        console.log("a");
        this.$emit("pullingUp");
      });
    },
    refresh() {
      // throttle(this.scroll.refresh())();
      // console.log("refres");
      this.scroll.refresh();
    },
    scrollTo(y,time) {
      this.scroll.scrollTo(0,y,time);
    }
  }
};
</script>

<style scoped>
</style>