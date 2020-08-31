<template>
    <div id="hy-swiper">
      <div class="swiper">
        <slot></slot>
      </div>
      <div class="indicator">
        <slot name="indicator" v-if="showIndicator && slideCount>1">
          <div v-for="(item, index) in slideCount" class="indi-item" :class="{active: index === currentIndex-1}" :key="index"></div>
        </slot>
      </div>
    </div>
</template>

<script>
	export default {
		name: "Swiper",
    props: {
      // 轮播间隔时间
      interval: {
		    type: Number,
        default: 1000
      },
      // 动画滚动时长
      animDuration: {
		    type: Number,
        default: 500
      },
      // 是否显示指示标
      showIndicator: {
        type: Boolean,
        default: true
      }
    },
    data: function () {
		  return {
        slideCount: 0, // 元素个数
        totalWidth: 0, // swiper的宽度
        swiperStyle: {}, // swiper样式
        currentIndex: 1, // 当前的index
        scrolling: false, // 是否正在滚动
      }
    },
    mounted: function () {
      // 1.操作DOM, 在前后添加Slide
        this.init();
        this.run();
    },
    methods: {
		  /**
       * 定时器操作
       */
      run: function () {
		    this.playTimer = window.setInterval(() => {
          this.currentIndex++;
          this.scrollContent(this.currentIndex);
        }, this.interval)
      },
      stopTimer: function () {
        window.clearInterval(this.playTimer);
      },

      /**
       * 滚动到正确的位置
       */
      scrollContent:async function (currentPosition) {
        this.scrolling = true;
        this.swiperStyle.transition = this.animDuration + 'ms';
        this.setTransform(-currentPosition * this.totalWidth);//步骤1
        await this.checkPosition(currentPosition);//等待第四张到第五张的动画完成后再回到第一张
        this.scrolling = false;
      },

      checkPosition: function(index) {
        if(index == this.slideCount+1){
          this.currentIndex = 1;
          setTimeout(() => {
            this.swiperStyle.transition = '0ms';
            this.setTransform(-this.totalWidth);
          }, this.animDuration);
          // 为什么这里要设置异步等待动画时长这么长时间：
          // 因为这里代码都是同步的，处理的很快，从第四张到第五张都是一瞬间的事
          // 所以即使是步骤1先执行，也是会直接跳到第一张
          // 而使用异步，会等到从第四张到第五章的动画执行完后在跳转到第一张，这样就不会出现闪变第一张了
        }
      },

      /**
       * 设置滚动的位置
       */
      setTransform: function (position) {
        this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
        this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
        this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
      },

      /**
       * 操作DOM, 在DOM前后添加Slide
       */
		  init: function () {
        let swiperEl = document.querySelector('.swiper');
        let slidesEls = swiperEl.getElementsByClassName('slide');
        this.slideCount = slidesEls.length;
        if (this.slideCount > 1) {
          let cloneFirst = slidesEls[0].cloneNode(true);
          let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
          swiperEl.insertBefore(cloneLast, slidesEls[0]);
          swiperEl.appendChild(cloneFirst);
          this.totalWidth = swiperEl.offsetWidth;
          this.swiperStyle = swiperEl.style;
        }
        this.setTransform(-this.totalWidth);
      }
    }
	}
</script>

<style scoped>
  #hy-swiper {
    overflow: hidden;
    position: relative;
  }

  .swiper {
    display: flex;
  }

  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }

  .indi-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }

  .indi-item.active {
    background-color: rgba(212,62,46,1.0);
  }
</style>
