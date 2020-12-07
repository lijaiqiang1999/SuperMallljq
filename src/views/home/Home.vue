<template>
  <div id="home">
    <nav-bar class="nav-bar-home"><div slot="center">购物街</div></nav-bar>
    
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-views :recommends="recommends"></recommend-views>
      <feature-view></feature-view>
      <tab-control :titles="['流行', '新款', '精选']" class="tab-control" @itemClick="itemClick"></tab-control>
      <goods-list :goods="showType"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>  

  </div>

</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendViews from './childComps/RecommendViews'
  import FeatureView from './childComps/FeatureView.vue';

  import NavBar from "components/common/navbar/NavBar.vue";
  import TabControl from 'components/content/TabControl/TabControl.vue';
  import GoodsList from 'components/content/goods/GoodsList.vue';
  import Scroll from 'components/common/scroll/Scroll.vue';
  import BackTop from 'components/content/backTop/BackTop.vue';

  import { getHomeMulticata, getGoodsData } from "network/home";



  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendViews,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop' : {page: 0, list: []},
          'new' : {page: 0, list: []},
          'sell' : {page: 0, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    created() {
      this.getHomeMulticata(),


      // this 指向 methods 里面的方法
      this.getGoodsData('pop'),
      this.getGoodsData('new'),
      this.getGoodsData('sell')
    },
    computed: {
      showType() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      /**
       * 事件监听方法
       */

      // 监听 tabControl 的点击事件, 进行页面的切换
      itemClick(index) {
        switch(index) {
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

      // 回到顶部按钮的点击事件
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },  

      // 判断回到顶部的按钮位置,决定是否显示与隐藏
      contentScroll(position) {
        this.isShowBackTop = -(position.y) > 1000
      },

      // 监听下拉事件,当下拉完成时,调用 getGoodsData 获取新一轮数据,但是只能获取一次
      loadMore() {
       this.getGoodsData(this.currentType)
      },


      /**
       * 网络请求的方法
       */
      getHomeMulticata() {
        getHomeMulticata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(this.recommends);
        })
      },

      getGoodsData(type) {
        // 根据页码请求数据 初始请求第一页数据
        const page = this.goods[type].page + 1;
        getGoodsData(type, page).then(res => {
          // 将请求到的数据进行保存
          // console.log(res);
          const newList = res.data.list;
          // console.log(newList);
          // push() 方法
          this.goods[type].list.push(...newList);
          // 页码默认为 0 请求完成后页码 +1
          this.goods[type].page ++

          // 调用 finishPullUp , 实现多次请求数据  
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }

</script>

<style scoped>
  #home {
    padding-top: 44px;
    /* padding-bottom: 49px; */
    /* height: 100vh; */
    /* position: relative; */
  }

  .nav-bar-home {
    background-color: #ff8198;
    color: #fff;
    box-shadow: 0 1px 1px rgba( 100 100 100 .1);

    position: fixed;
    left: 0px;
    right: 0;
    top: 0;
    z-index: 999;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 2;
  }

  .content {
    overflow: hidden;
    position: absolute;

    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  /* .content {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  } */
</style>
