<template>
  <swiper v-if="images.length">
    <swiper-item class="item" v-for="(item, index) in images" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "",
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    
  },
  props: {
		  images: {
		    type: Array,
        default() {
		      return []
        }
      }
    }
};
</script>

<style scoped>
</style>