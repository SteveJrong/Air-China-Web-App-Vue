<!-- 底部条件筛选工具栏 组件 -->
<template>
  <div>
    <div class="phone-viewport">
      <md-bottom-bar md-type="shift" :md-theme="'bottom-bar-' + theme">
        <md-bottom-bar-item @click="theme = 'blue'">
          <md-icon class="far fa-clock"></md-icon>
          <span>从早到晚</span>
        </md-bottom-bar-item>

        <md-bottom-bar-item @click="theme = 'green'">
          <md-icon class="far fa-clock"></md-icon>
          <span>价格</span>
        </md-bottom-bar-item>

        <md-bottom-bar-item @click="theme = 'red'">
          <md-icon class="far fa-clock"></md-icon>
          <span>筛选</span>
        </md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomFilterToolBar",
  data: () => ({
    theme: "blue"
  })
}
</script>

<style lang="scss">
  @import "node_modules/vue-material/dist/theme/engine.scss"; // 导入主题引擎以自定义

  // 设置蓝色主题
  /** 设置颜色请参考Google Material Design的颜色配置文档：https://material.io/guidelines/style/color.html#color-color-palette
      *   md-get-palette-color()方法中，第一个参数表示颜色的主色调，对应于文档中每一大方块左上角的名称
      *                               第二个参数表示颜色的代码，对应于文档中每一大方块中某个具体颜色行最左侧的数字（有的是以字母开头的颜色代码，有的则是纯数字的颜色代码）
      */
  @include md-register-theme("bottom-bar-blue", (
      primary: md-get-palette-color(blue, A200),
      accent: md-get-palette-color(red, A200)
    ));

  // 设置绿色主题
  @include md-register-theme("bottom-bar-green", (
      primary: md-get-palette-color(green, A700)
    ));

  // 设置红色主题
  @include md-register-theme("bottom-bar-red", (
      primary: md-get-palette-color(red, A200)
    ));

  @import "node_modules/vue-material/dist/theme/all";
</style>

<style lang="scss" scoped>
  .phone-viewport {
    overflow: hidden;
    color: #fff;

    position: absolute;
    width: 100%;
    bottom: 0;
  }
  </style>

  <style scoped>
    .phone-viewport span {
      margin-top: 5px;
      font-size: 10px;
      word-spacing: 8px;
      letter-spacing: 1px;
    }
</style>