<template>
  <div class="goods-list">
    <!-- {{goods}} -->
    <!-- 将拿到的数据传给 GoodsListItem  -->
    <good-list-item v-for="(item, index) in goods" :key="index" :goods-item="item" class="item"></good-list-item>
  </div>
</template>

<script>
  import GoodListItem from './GoodListItem.vue'

  export default {
    name: 'GoodList',
    components: { GoodListItem },

    // 将 home 请求到的数据传给子组件
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods-list {
    /* flex 布局 */
    display: flex;
    /* flex-wrap  属性规定flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向 */
    flex-wrap: wrap;
    padding: 5px;
    /* justify-content 用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。 */
    justify-content: space-around;
  }

  .goods-list .item {
    width: 48%;
  }
</style>