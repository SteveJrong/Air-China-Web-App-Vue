<!-- 顶部导航工具栏 组件 -->
<template>
    <md-app md-waterfall md-mode="fixed">
        <md-app-toolbar class="md-primary">
            <md-button class="md-icon-button" @click="toHome()">
                <i class="fas fa-chevron-left"></i>
            </md-button>
            <span class="md-title ticket-search-title">
                <span>
                    <span class="take-off-location">北京</span>
                    <span class="logo"><icon name="right-arrow" class="right-arrow-icon" /></span>
                    <span class="land-location">厦门</span>

                    <span class="take-off-day">2018.02.11</span>
                </span>
            </span>
        </md-app-toolbar>

        <md-app-content>
            <!-- 数据列表 -->
            <TicketSearchResultDataList></TicketSearchResultDataList>
        </md-app-content>
    </md-app>
</template>

<script>
    import TicketSearchResultDataList from '@/components/ticket-search-result/datalist/TicketSearchResultDataList'

    export default {
        name: 'HeaderNavToolBar',
        components: {
            'TicketSearchResultDataList': TicketSearchResultDataList
        },
        methods: {
            toHome() {
                this.$store.dispatch('changeBottomNavToolBarState',true); // 这里提交一个事件来改变存储在store中主页底部的按钮导航栏绑定的值以隐藏掉主页下方的导航栏
                this.$router.push({ path: '/home' });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .md-app {
        overflow: auto;
    }
    .md-app-toolbar {
        height: 2rem;
    }

    .right-arrow-icon {
        width: 1.3rem;
        height: .80rem;
    }

    .ticket-search-title {
        display: block;
        margin: .25rem auto auto auto;
    }

    .ticket-search-title .take-off-day {
        display: block;
        font-size: .75rem;
    }

    .md-app-content {
        padding: 0;
    }
</style>