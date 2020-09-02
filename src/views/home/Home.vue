<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物首页</div>
    </nav-bar>
    <tab-control ref="tc1" class="tc" :class="{show:tabcontrolshow}" :titles="['流行','新款','精选']" @itemClick="tabClick"></tab-control>
    <scroll class="scroll" ref="wrapper" @scroll="scrollxy" @pullingUp="loadMore">
      <div id="content">
        <home-swiper :banners="banners"></home-swiper>
        <feature-view :features="recommends"></feature-view>
        <tab-control ref="tc2" :titles="['流行','新款','精选']" @itemClick="tabClick"></tab-control>
        <goods-list :goods-list="goodsList[currentType].list"></goods-list>
      </div>
    </scroll>
    <div :class="{show: backtopshow}">
      <div class="backtop" @click="backTop" ><span>^</span></div>
    </div>
    
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import Scroll from "common/scroll/Scroll";
import TabControl from "content/tabControl/TabControl";
import HomeSwiper from "./childComps/HomeSwiper";
import FeatureView from "./childComps/FeatureView";
import GoodsList from "./childComps/GoodList";
import { getHomeMultidata, getHomeData } from "network/home";
import BScroll from "better-scroll";
import {throttle} from "@/common/tool"
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
  },
  data() {
    return {
      currentType: "pop",
      goodsList: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      },
      recommends: [],
      banners: [],
      img: [],
      tabcontrolshow: true,
      backtopshow: true
    };
  },
  created() {
    // 轮播图数据
    this.getMultidata();

    // 三类商品数据
    this.getHomeProducts("pop");
    this.getHomeProducts("new");
    this.getHomeProducts("sell");
  },
  mounted() {
    this.$nextTick(function() {
      this.$bus.$on("getimg", img => {
        for (let i = 0, l = img.length; i < l; i++) {
          img[i].onload = () => {
            this.$refs.wrapper.refresh();
            // throttle(this.$refs.wrapper.refresh());
          };
        }
      });
    });
  },
  methods: {
    backTop(){
      this.$refs.wrapper.scrollTo(0,1000);
    },
    scrollxy(pos){
      // -1000
      if(pos.y <= -298){
        this.tabcontrolshow = false;
      }else{
        this.tabcontrolshow = true;
      }
      if(pos.y <= -1000){
        this.backtopshow = false;
      }else{
        this.backtopshow = true;
      }
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tc1.currentIndex = index;
      this.$refs.tc2.currentIndex = index;
    },
    getMultidata() {
      getHomeMultidata().then(res => {
        this.banners.push(...res.data.data.banner.list);
        this.recommends.push(...res.data.data.recommend.list);
      });
    },
    getHomeProducts(type) {
      getHomeData(type, this.goodsList[type].page).then(res => {
        const goods = res.data.data.list;
        this.goodsList[type].list.push(...goods);
        this.goodsList[type].page += 1;
      });
    },
     loadMore() {
		    this.getHomeProducts(this.currentType)
      },
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.nav-bar {
  background-color: #ff8198;
  font-weight: 700;
  color: #fff;
}
.scroll {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
.show{
  display: none;
}
.tc{
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 3;
}
.backtop{
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #ff8198;
  color: #fff;
  z-index: 3;
  bottom: 59px;
  right: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
}
.backtop span{
  padding-top: 12px;
}
</style>