<!-- 机票搜索 主框架组件 -->
<template>
    <div>
        <md-tabs class="md-primary" md-alignment="centered" md-sync-route>
            <md-tab id="tab-home" md-label="单程">
                <SingleTripTicketSearch></SingleTripTicketSearch>
            </md-tab>

            <md-tab id="tab-pages" md-label="往返">
                <DualTripTicketSearch></DualTripTicketSearch>
            </md-tab>
        </md-tabs>
  </div>
</template>

<script>
    import SingleTripTicketSearch from '@/components/home/ticket-search/ticket-search-into-tabs/SingleTripTicketSearch'
    import DualTripTicketSearch from '@/components/home/ticket-search/ticket-search-into-tabs/DualTripTicketSearch'

    export default {
        name: 'TicketSearchResult-MainFrame',
        components: {
            'SingleTripTicketSearch': SingleTripTicketSearch,
            'DualTripTicketSearch': DualTripTicketSearch
        }
    }
</script>