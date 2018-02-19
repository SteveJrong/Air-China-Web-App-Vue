<!-- 通用 底部导航工具栏 -->
<template>
  <div class="phone-viewport">
    <md-bottom-bar md-sync-route>

      <!-- 首页 -->
      <md-bottom-bar-item to="/home">
        <icon name="airplane" class="home-icon" />
        <span class="md-bottom-bar-label">首页</span>
      </md-bottom-bar-item>

      <!-- 航班动态 -->
      <md-bottom-bar-item to="/flight-dynamics">
        <icon name="flight-dynamics" class="flight-dynamics-icon" />
        <span class="md-bottom-bar-label">航班动态</span>
      </md-bottom-bar-item>

      <!-- 我的 -->
      <md-bottom-bar-item to="/mine">
        <icon name="mine" class="mine-icon" />
        <span class="md-bottom-bar-label">我的</span>
      </md-bottom-bar-item>

      <!-- 更多 -->
      <md-bottom-bar-item to="/more">
        <icon name="more" class="more-icon" />
        <span class="md-bottom-bar-label">更多</span>
      </md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
  export default {
    name: "BottomNavToolBar"
  }
</script>

<style lang="scss" scoped>
  .phone-viewport {
    width: 100%;
    display: inline-flex;
    align-items: flex-end;
    overflow: hidden;

    // 固定于页面底部
    position:fixed;
    bottom: 0;
  }

  // 首页 图标
  .home-icon {
    width: .8rem;
    height: .8rem;
  }

  // 航班动态 图标
  .flight-dynamics-icon {
    width: 1.1rem;
    height: 1.1rem;
  }

  // 我的 图标
  .mine-icon {
    width: 1rem;
    height: 1rem;
  }

  .more-icon {
    width: .88rem;
    height: .88rem;
  }

  .md-bottom-bar-label {
    font-size: 0.9rem;
  }
</style>