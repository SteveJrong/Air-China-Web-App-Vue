<!-- 机票搜索结果 主框架组件 -->
<template>
    <div>
        <HeaderNavToolBar :style="'max-height:' + maxHeight + 'px;'"></HeaderNavToolBar>
        <ButtomFilterToolBar></ButtomFilterToolBar>
    </div>
</template>

<script>
    import HeaderNavToolBar from '@/components/ticket-search-result/toolbar/HeaderNavToolBar'
    import ButtomFilterToolBar from '@/components/ticket-search-result/toolbar/BottomFilterToolBar'

    export default {
        name: "TicketSearchResult-MainFrame",
        data() {
            return {
                maxHeight: window.screen.height - 56 // 在机票搜索结果主组件中设置顶部头工具栏的高度
            }
        },
        components: {
            'HeaderNavToolBar': HeaderNavToolBar,
            'ButtomFilterToolBar': ButtomFilterToolBar
        }
    }
</script>