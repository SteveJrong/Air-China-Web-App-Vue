<!-- 快捷功能 主组件 -->
<template>
    <div>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-button class="md-dense md-raised md-primary">
                    <i class="far fa-calendar-alt"></i>
                    <span>会员日</span>
                </md-button>
            </div>
            <div class="md-layout-item">
                <md-button class="md-dense md-raised md-primary">
                    <i class="fas fa-map-marker"></i>
                    <span>值机选座</span>
                </md-button>
            </div>
            <div class="md-layout-item">
                <md-button class="md-dense md-raised md-primary">
                    <i class="fas fa-chess-king"></i>
                    <span>俱乐部</span>
                </md-button>
            </div>
        </div>

        <div class="md-layout">
            <div class="md-layout-item">
                <md-button class="md-dense md-raised md-primary">
                    <i class="fas fa-archive"></i>
                    <span>我的订单</span>
                </md-button>
            </div>
            <div class="md-layout-item">
                <md-button class="md-dense md-raised md-primary">
                    <i class="fas fa-utensils"></i>
                    <span>自助选餐</span>
                </md-button>
            </div>
            <div class="md-layout-item">
                <md-button class="md-dense md-raised md-primary">
                    <i class="fas fa-puzzle-piece"></i>
                    <span>附加服务</span>
                </md-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: "QuickFunctions"
    }
</script>

<style lang="scss" scoped>
    @import "node_modules/vue-material/dist/theme/engine.scss";

    .md-layout-item {
        height: 3rem;
        text-align: center;
        padding-top: .2rem;
        background: md-get-palette-color(blue, 200);

        &:after {
            width: auto;
            height: 100%;
            display: block;
            content: " ";
        }
    }

    .md-layout-item .md-button {
        margin: 0 auto;
        margin-top: 2.9px;
        text-align: center;
    }

    .md-layout-item .md-button span {
        padding-left: 5px;
    }
</style>