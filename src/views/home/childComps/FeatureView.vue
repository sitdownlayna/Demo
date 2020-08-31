<template>
  <div class="feature">
    <div class="feature-item" v-for="(item) in features" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
	export default {
		name: "FeatureView",
    props: {
		  features: {
		    type: Array,
        default: []
      }
    }
	}
</script>

<style scoped>
  .feature {
    display: flex;
    margin-top: 10px;
    font-size: 14px;
    padding-bottom: 10px;
    border-bottom: 10px solid #eee;
  }

  .feature-item {
    flex: 1;
    text-align: center;
  }

  .feature img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
