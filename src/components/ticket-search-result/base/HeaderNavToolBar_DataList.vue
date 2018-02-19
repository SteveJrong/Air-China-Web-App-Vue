<!-- 顶部导航工具栏和数据列表 组件 -->
<template>
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toHome()">
          <i class="fas fa-chevron-left"></i>
        </md-button>
        <span class="md-title">
            <span>北京 <i class="fas fa-long-arrow-alt-right"></i> 厦门</span>
            <span>2018.02.11</span>
        </span>
      </md-app-toolbar>

      <md-app-content>
          <!-- 数据列表 -->
        <div class="full-control">
            <md-list>

                <!-- 数据列表项 -->
                <md-list-item v-for="item in dataList" :key="item.id" md-expand>
                    <div class="ticket-info-main">

                        <!-- 航班基本信息 -->
                        <div class="flight-basic-info">
                            <ul>
                                <li>
                                    <span><i class="fab fa-skyatlas"></i></span>
                                    <span> {{ item.flightBasicInfo.flightNumber }}</span> <!-- 航班号 -->
                                </li>

                                <li>
                                    <span><i class="fas fa-utensils"></i> {{ item.flightBasicInfo.meals }}</span> <!-- 可提供的机上餐食 -->
                                    <span> 机型 | {{ item.flightBasicInfo.airplaneNumber }}</span> <!-- 班机型号 -->
                                </li>
                            </ul>
                        </div>

                        <!-- 机票基本价格信息 -->
                        <ul class="md-list-item-text">
                            <li>
                                <span class="take-off-time">{{ item.flightBasicInfo.takeOffTime }}</span> <!-- 起飞时间 -->
                                <span class="take-off-location">{{ item.flightBasicInfo.takeOffLocation }}</span> <!-- 起飞地点 -->
                            </li>

                            <li>
                                <i class="fas fa-plane"></i>
                            </li>

                            <li>
                                <span class="land-time">{{ item.flightBasicInfo.landTime }}</span> <!-- 降落时间 -->
                                <span class="land-location">{{ item.flightBasicInfo.landLocation }}</span> <!-- 降落地点 -->
                            </li>

                            <li>
                                <span class="price">{{ item.flightBasicInfo.startingPrice | formatMoney }}<span> 起</span></span>
                            </li>
                        </ul>
                    </div>

                    <!-- 此航班的机票价格项目列表 -->
                    <md-list slot="md-expand">
                        <!-- item项 -->
                        <md-list-item class="md-inset" v-for="priceItem in item.priceItemsList" :key="priceItem.id">
                            <ul>
                                <li>
                                    <span>{{ priceItem.type}}</span> <!-- 价格项目类型 -->
                                    <span>{{ priceItem.score }}</span> <!-- 可获积分 -->
                                </li>
                                <li>
                                    <span>退改规则</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>￥{{ priceItem.price  | formatMoney }}</span> <!-- 机票价格 -->
                                </li>
                                <li>
                                    <md-button class="md-raised md-primary">预订</md-button>
                                </li>
                            </ul>
                        </md-list-item>
                    </md-list>
                </md-list-item>

            </md-list>
        </div>
      </md-app-content>
    </md-app>
</template>

<script>
    export default {
        name: 'HeaderNavToolBar_DataList',
        data () {
            return {
                dataList: this.$store.getters.ticketSearchResultList
            }
        },
        filters: {

            /**
             * 格式化金额的过滤器
             */
              formatMoney : function(value){
                var value = Math.round(parseFloat(value) * 100) / 100;
                var xsd = value.toString().split(".");
                if(xsd.length === 1){
                    value = value.toString() + ".00";
                    return value;
                }
                if(xsd.length > 1){
                    if(xsd[1].length < 2){
                        value = value.toString() + "0";
                    }
                    return value;
                }
            }
        },
        created() {
            console.log(this.$store.getters.ticketSearchResultList)
        },
        methods: {
            toHome() {
                this.$store.dispatch('changeHomeBottomNavigationBarEnableState',true) // 这里提交一个事件来改变存储在store中主页底部的按钮导航栏绑定的值以隐藏掉主页下方的导航栏
                this.$router.push({ path: '/home' })
            }
        }
    }
</script>

<style lang="scss" scoped>
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
</style>

<style scoped>
    /* 数据列表的外容器 */
    .md-app-content {
        width: 100%;
        padding: 0px;
    }

    /* 机票信息主容器 div */
    .ticket-info-main {
        margin: 15px auto;
    }

    /* 飞机机型信息主容器 div */
    .flight-basic-info {
        margin-bottom: 20px;
        overflow: hidden;
    }

    .flight-basic-info ul {
        padding: 0px;
        list-style-type: none;
    }

    .flight-basic-info ul li {
        font-size: 12.5px;
    }

    .flight-basic-info ul li:nth-child(1) {
        float: left;
    }

    .flight-basic-info ul li:nth-child(2) {
        float: right;
    }

    /* ul 数据列表 */
    .md-list-item-text {
        padding: 5px 0px 5px 0px;
        display: inline;
    }

    .md-list-item-text li span {
        display: block;
    }

    .take-off-time,.land-time {
        font-size: 12.5px;
    }

    /* 数据列表中的 li 项 */
    .md-list-item-text li:nth-child(1),.md-list-item-text li:nth-child(2),.md-list-item-text li:nth-child(3)  {
        float: left;
        width: 80px;
        margin: auto 7px;
    }

    /* 数据列表中的第二个 li 项 飞机图标样式 */
    .md-list-item-text li:nth-child(2) {
        width: 20px;
        margin: 12px 2px 12px -32px;
    }

    /* 数据列表中的第四个 li 项 机票价格样式 */
    .md-list-item-text li:nth-child(4) {
        float: right;
        width: 80px;
        margin-top: 4.85px;
        margin-right: 0px;

        color: #FF833B;
        font-weight: bold;
        font-size: 18px;
        
        word-spacing: 3px;
        letter-spacing: -1.15px;
    }

    /* 数据列表中的第四个 li 项 机票价格中的“起”字样式 */
    .md-list-item-text li:nth-child(4) span span {
        display: inline;
        font-size: 4px;
    }

    .md-list-item-content {
        padding: 0px;
    }

    .md-inset {
        margin-top: 6px;
        margin-bottom: 6px;
        border-top: 1px dashed #B7D9FE;
    }

    .md-inset ul {
        list-style-type: none;
        padding: 0px;
    }

    .md-inset ul li span {
        display: block;
    }

    /* 机票详细价格项左侧浮动部分 */
    .md-inset ul:nth-child(1) li {
        float: left;
        margin: auto 6px;
        font-size: 13.5px;
        line-height: 25px;
    }
    .md-inset ul:nth-child(1) li span {
        display: block;
    }

    /* 机票详细价格项右侧浮动部分 */
    .md-inset ul:nth-child(2) li {
        float: left;
    }
    .md-inset ul:nth-child(2) li span {
        display: block;
    }
    .md-inset ul:nth-child(2) li:nth-child(1) {
        margin: 10.5px 5px auto auto;

        color: #FF833B;
        font-weight: bold;
        font-size: 18px;
        
        word-spacing: 3px;
        letter-spacing: -1.15px;
    }

    .md-title span {
        display: block;
    }

    .md-title span:nth-child(2) {
        margin-top: 6px;
        font-size: 14px;
    }
</style>

<style>
    /* 使用一个全局样式覆盖原有的样式以将机票详细价格列表前的内边距去掉 */
    .md-list-item.md-inset .md-list-item-content {
        padding: 0px;
    }
</style>
