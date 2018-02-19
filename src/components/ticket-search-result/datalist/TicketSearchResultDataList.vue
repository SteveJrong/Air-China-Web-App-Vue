<!-- 数据列表 组件 -->
<template>
    <div class="full-control">
        <md-list>

            <!-- 数据列表项 -->
            <md-list-item v-for="item in dataList" :key="item.id" md-expand>

                <!-- 航班简略信息 div -->
                <div class="flight-basic-info-container">
                    <!-- 航班信息 -->
                    <div class="md-layout flight-info-container">
                        <div class="md-layout-item flight-number-container">
                            <span><i class="fab fa-skyatlas"></i></span>
                            <span>{{ item.flightBasicInfo.flightNumber }}</span>
                        </div>

                        <div class="md-layout-item airplane-number-meals-container">
                            <span><i class="fas fa-utensils"></i> {{ item.flightBasicInfo.meals }}</span>
                            <span> 机型 | {{ item.flightBasicInfo.airplaneNumber }}</span>
                        </div>
                    </div>

                    <!-- 航班详细信息 -->
                    <div class="md-layout flight-detail-info-container">
                        <div class="md-layout-item take-off-info-container">
                            <span class="take-off-time">{{ item.flightBasicInfo.takeOffTime }}</span>
                            <span class="take-off-location">{{ item.flightBasicInfo.takeOffLocation }}</span>
                        </div>

                        <div class="md-layout-item icon">
                            <icon name="plane" class="arrive-icon" />
                        </div>

                        <div class="md-layout-item land-info-container">
                            <span class="land-time">{{ item.flightBasicInfo.landTime }}</span>
                            <span class="land-location">{{ item.flightBasicInfo.landLocation }}</span>
                        </div>

                        <div class="md-layout-item starting-price-container">
                            <span class="price">{{ item.flightBasicInfo.startingPrice | formatMoney }}</span>
                            <span> 起</span>
                        </div>
                    </div>
                </div>

                <!-- 此航班的机票价格项目列表 -->
                <md-list slot="md-expand">
                    
                    <!-- item项 -->
                    <div class="md-layout flight-prices-items-container">
                        <md-list-item class="md-inset flight-price-item" v-for="priceItem in item.priceItemsList" :key="priceItem.id">
                            <div class="md-layout-item type-score">
                                <span>{{ priceItem.type}}</span>
                                <span>{{ priceItem.score}}</span>
                            </div>
                            <div class="md-layout-item rules">
                                <span>退改规则</span>
                            </div>
                            <div class="md-layout-item price">
                                <span>
                                    <span>￥</span>
                                    <span>{{ priceItem.price | formatMoney }}</span>
                                </span>
                            </div>
                            <div class="md-layout-item order">
                                <md-button class="md-raised md-primary">预订</md-button>
                            </div>
                        </md-list-item>
                    </div>

                </md-list>
                
            </md-list-item>

        </md-list>
    </div>
</template>

<script>
    export default {
        name: "TicketSearchResultDataList",
        data() {
            return {
            dataList: this.$store.getters.ticketSearchResultList
            };
        },
        filters: {
            /**
             * 格式化金额的过滤器
             */
            formatMoney: function(value) {
            var value = Math.round(parseFloat(value) * 100) / 100;
            var xsd = value.toString().split(".");
            if (xsd.length === 1) {
                value = value.toString() + ".00";
                return value;
            }
            if (xsd.length > 1) {
                if (xsd[1].length < 2) {
                value = value.toString() + "0";
                }
                return value;
            }
            }
        },
        created() {
            console.log(this.$store.getters.ticketSearchResultList);
        },
        methods: {
            toHome() {
            this.$store.dispatch("changeHomeBottomNavigationBarEnableState", true); // 这里提交一个事件来改变存储在store中主页底部的按钮导航栏绑定的值以隐藏掉主页下方的导航栏
            this.$router.push({ path: "/home" });
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "node_modules/vue-material/dist/theme/engine";

    // 基础样式
    .md-app {
        overflow: auto;
    }
    .md-app-toolbar {
        height: 90px;
    }
    .full-control > .md-list {
        width: 100%;
        height: 100%;
        vertical-align: top;
        display: inline-block;
        overflow: auto;
        border: 1px solid rgba(#000, .12);
    }

    // 航班简略信息主容器 div
    .flight-basic-info-container {
        margin: .5rem auto;
    }

    // ******************************** 航班信息 start ********************************
    .flight-basic-info-container .flight-info-container {
        margin: 0 auto 1rem auto;
    }
    .flight-basic-info-container .flight-info-container .flight-number-container,
    .flight-basic-info-container .flight-info-container .airplane-number-meals-container {
        font-size: .6rem;
    }
    .flight-basic-info-container .flight-info-container .flight-number-container {
        text-align: left;
    }
    .flight-basic-info-container .flight-info-container .airplane-number-meals-container {
        text-align: right;
    }

    // 出发地 div
    .flight-basic-info-container .flight-detail-info-container .take-off-info-container {
        flex: 0.1;
    }
    .flight-basic-info-container .flight-detail-info-container .take-off-info-container span {
        display: block;
        padding: .2rem 1rem;
        text-align: center;
    }
    // 出发地时间
    .flight-basic-info-container .flight-detail-info-container .take-off-info-container span:nth-child(1) {
        font-size: 1.3rem;
    }
    // 出发地地点
    .flight-basic-info-container .flight-detail-info-container .take-off-info-container span:nth-child(2) {
        font-size: .7rem;
    }
    .flight-basic-info-container .flight-detail-info-container .land-info-container span {
        
        display: block;
    }
    // 基本价格
    .flight-basic-info-container .flight-detail-info-container .starting-price-container {
        margin: 5% auto;
        text-align: right;
    }
    .flight-basic-info-container .flight-detail-info-container .starting-price-container span {
        color: #FF833B;
        
    }
    .flight-basic-info-container .flight-detail-info-container .starting-price-container span:nth-child(1) {
        font-size: 1.15rem;
        font-weight: bold;
        word-spacing:.8rem;
        letter-spacing: -0.08rem;
        padding-left: 1rem;
    }
    .flight-basic-info-container .flight-detail-info-container .starting-price-container span:nth-child(2) {
        font-size: .5rem;
    }

    .arrive-icon {
        min-width: 1.35rem;

        width: 50%;
        height: 50%;
        margin: auto;
        display: block;
        margin-top: .7rem;
    }

    // 到达地 div
    .flight-basic-info-container .flight-detail-info-container .land-info-container {
        flex: 0.1;
    }
    .flight-basic-info-container .flight-detail-info-container .land-info-container span {
        display: block;
        padding: .2rem 1rem;
        text-align: center;
    }
    // 到达地时间
    .flight-basic-info-container .flight-detail-info-container .land-info-container span:nth-child(1) {
        font-size: 1.3rem;
    }
    // 到达地地点
    .flight-basic-info-container .flight-detail-info-container .land-info-container span:nth-child(2) {
        font-size: .7rem;
    }
    // ******************************** 航班信息 end ********************************


    // ******************************** 价格项目列表 start ********************************
    .flight-prices-items-container .flight-price-item {
        width: 100%;
    }
    .flight-prices-items-container .flight-price-item span {
        font-size: .7rem;
    }
    .flight-prices-items-container .flight-price-item .type-score span:nth-child(2) {
        font-size: .5rem;
    }
    .flight-prices-items-container .flight-price-item .type-score span {
        display: block;
        color: #6E6E6E;
    }
    .flight-prices-items-container .flight-price-item .rules {
        padding: 2rem auto;
        color: #A8A8A8;
    }
    .flight-prices-items-container .flight-price-item .rules span {
        margin-top: -.9rem;
        padding-left: .8em;
        display: block;
        font-size: .5rem;
        text-decoration: underline;
    }
    .flight-prices-items-container .flight-price-item .price span:nth-child(1) {
        font-size: .5rem;
        color: #FF833B;
        padding-left: 1rem;
    }
    .flight-prices-items-container .flight-price-item .price span:nth-child(2) {
        font-size: 1rem;
        letter-spacing: -0.06rem;

        color: #FF833B;
    }
    // ******************************** 价格项目列表 end ********************************
</style>

<style lang="scss">

    // 使用全局样式覆盖伸缩列表的样式
    .md-list-item-content {
        padding: .2rem .5rem !important;
    }
</style>