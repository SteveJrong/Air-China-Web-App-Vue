<!-- 首页轮播图 组件 -->
<template>
  <div class="round-play-container">
    <slider :pages="pages" :sliderinit="sliderinit"></slider>
  </div>
</template>

<script>
  import VueConciseSlider from "vue-concise-slider";

  export default {
    name: "RoundPlay",
    data() {
      return {
        pages: [
          {
            title: "",
            style: {
              background:
                "url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2349556892,30374650&fm=27&gp=0.jpg)"
            }
          },
          {
            title: "",
            style: {
              background:
                "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518857607&di=2a35d0386385a9dfdc1f1c238b351754&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01eee6597ed8e5000000212991798a.jpg%401280w_1l_2o_100sh.jpg)"
            }
          },
          {
            title: "slide3",
            style: {
              background:
                "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518016743972&di=4500ea4512ddc82a7264509ae4aca236&imgtype=0&src=http%3A%2F%2Fintranet.travel4u.com.tw%2FeWeb_t4u%2FIMGDB%2F001512%2F001527%2F001569%2F00044893.JPG)"
            }
          }
        ],
        
        /**
         * 初始化图片滑动组件数据
         */
        sliderinit: {
          currentPage: 0, // 当前页码
          thresholdDistance: 100, // 滑动判定距离
          thresholdTime: 100, // 滑动判定时间
          autoplay: 5000, // 自动滚动，单位ms
          loop: true, // 是否开启循环滚动
          direction: "horizontal", // 方向设置（垂直滚动为vertical，水平滚动为horizontal）
          infinite: 1, // 无限滚动前后遍历数
          slidesToScroll: 1 // 每次滑动项数
        }
      };
    },
    components: {
      slider: VueConciseSlider
    }
  }
</script>

<style lang="scss" scoped>
  .round-play-container {
    width: 100%;
    height: 180px;
    position: relative;
  }
</style>
