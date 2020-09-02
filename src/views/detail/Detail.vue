<template>
  <div id="detail">
    <detail-nav-bar class="navbar"></detail-nav-bar>
    <scroll class="scroll">
      <div class="content">
        <detail-swiper></detail-swiper>
        <detail-head-info :goods="goods"></detail-head-info>
        <ul>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import Scroll from "common/scroll/Scroll"
import DetailSwiper from "./childComps/DetailSwiper"
import DetailHeadInfo from "./childComps/DetailHeadInfo"
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      id: "",
      app:{name:'cfz'},
      topImages: [],//轮播图片
      goods: {},//商品信息
      shop: {},//店铺信息 
      detailInfo: {},//商品信息
      paramInfo: {},//参数信息
      commentInfo: {},//评论信息
      recommendList: [],//
      themeTops: [],//
      currentIndex: 0
    };
  },
  components: {
    DetailNavBar,
    Scroll,
    DetailSwiper,
    DetailHeadInfo
  },
  created() {
    this.getDetailData();
    this.getRecommend();
  },
  methods: {
    
    getDetailData() {
      const iid = this.$route.query.id;
      this.id = iid;
      getDetail(iid).then(res => {
        // console.log(res.data.result);
        // 2.1.获取结果
        const data = res.data.result;
        // 2.2.获取顶部信息
        this.topImages = data.itemInfo.topImages;
        // 2.3.获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 2.4.获取店铺信息
        this.shop = new Shop(data.shopInfo);
        // 2.5.获取商品信息
        this.detailInfo = data.detailInfo;
        // 2.6.保存参数信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        // 2.7.保存评论信息
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },
    getRecommend() {
      getRecommend().then(res => {
        // console.log(res);
      });
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
}
.navbar{
  background-color: #ff5777;
  color: white;
}
.scroll{
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
</style>