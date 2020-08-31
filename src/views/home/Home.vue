<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物首页</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <feature-view :features="recommends"></feature-view>
    <tab-control :titles="['流行','新款','精选']" @itemCLick="tabClick"></tab-control>
    <goods-list :goods-list="goodsList[currentType].list"></goods-list>
    <!-- <home-swiper></home-swiper> -->
    
  </div>
</template>

<script>
  import NavBar from 'common/navbar/NavBar'
  import TabControl from 'content/tabControl/TabControl'
  import HomeSwiper from './childComps/HomeSwiper'
  import FeatureView from './childComps/FeatureView'
  import GoodsList from './childComps/GoodList'
  import {getHomeMultidata, getHomeData} from 'network/home'
  import BScroll from '@better-scroll/core'
  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      FeatureView,
      TabControl,
      GoodsList
    },
    data() {
      return {
        currentType: 'pop',
        goodsList: {
          'pop': {page: 1, list: []},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []}
        },
        recommends:[],
        banners: []
      }
    },
    created() {
      // 轮播图数据
      this.getMultidata();

      // 三类商品数据
      this.getHomeProducts('pop')
      this.getHomeProducts('new')
      this.getHomeProducts('sell')
    },
    methods: {
      tabClick(index) {
		    switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      getMultidata(){
        getHomeMultidata().then(res=>{
          this.banners.push(...res.data.data.banner.list)
          this.recommends.push(...res.data.data.recommend.list)
        })
      },
      getHomeProducts(type) {
        getHomeData(type, this.goodsList[type].page).then(res => {
          const goods = res.data.data.list;
          this.goodsList[type].list.push(...goods);
          this.goodsList[type].page += 1;
        })
      }
    },
  };
</script>

<style scoped>
  #home{
    position: relative;
  }
  .nav-bar{
    background-color: #ff8198;
    font-weight: 700;
    color: #fff;    
  }
</style>