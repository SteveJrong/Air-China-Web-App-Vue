<!-- App根组件 -->
<template>
  <div id="app">
    <router-view></router-view>
    <BottomNavToolBar v-bind:class="dynamicHeightOfBottomNavToolBar"></BottomNavToolBar>
  </div>
</template>

<script>
  import BottomNavToolBar from '@/components/common/BottomNavToolBar' // 底部按钮导航栏

  export default {
    name: 'Home',
    components: 
      { 
        'BottomNavToolBar': BottomNavToolBar
      },
      computed: {

        /**
         * 使用计算属性来为主页底部的按钮导航栏（BottomNavigationBar组件）绑定动态Css样式
         * 因为当展示机票搜索结果页时，主页底部的按钮导航栏是不需要显示的。
         * 当在主页中点击机票查询按钮时，会设置提交改变按钮显示状态的action以改变存储在store中的状态值，然后在这里使用计算属性充当观察者，数据一有变动这里绑定的值就会对应有变化
         */
        dynamicHeightOfBottomNavToolBar () {
          let state = this.$store.getters.bottomNavToolBarState;
          return {
            'hide-bottom-nav-tool-bar': !state ? true : false // 如果值为true，则样式 disable-bottom-nav-tool-bar 生效，否则此样式不生效。这里通过取出在store中保存的数据进行判断
          }
        }
      }
  }
</script>

<style>
  .hide-bottom-nav-tool-bar {
    visibility: hidden;
  }
</style>