<!-- 主页 主框架组件 -->
<template>
        <md-content class="md-scrollbar" :style="'height:'+ height +'px;'">
            <RoundPlay></RoundPlay>
            <TicketSearchResultMainFrame></TicketSearchResultMainFrame>
            <QuickFunctions></QuickFunctions>
        </md-content>
</template>

<script>
    import RoundPlay from '@/components/home/round-play/RoundPlay'
    import TicketSearchResultMainFrame from '@/components/home/ticket-search/base/TicketSearch-MainFrame'
    import QuickFunctions from '@/components/home/quick-functions/base/QuickFunctions'

    export default {
      name: 'Home-MainFrame',
      components: 
        { 
          'RoundPlay': RoundPlay,
          'TicketSearchResultMainFrame': TicketSearchResultMainFrame,
          'QuickFunctions': QuickFunctions
        },
        data() {
            return {
                height: window.screen.height - 58
            }
        }
    }
</script>

<style lang="scss" scoped>
  .md-content {
    overflow: auto;
  }
</style>