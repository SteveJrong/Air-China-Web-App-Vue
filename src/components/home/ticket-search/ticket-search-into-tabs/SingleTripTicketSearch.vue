<!-- 单程机票 Tab查询组件 -->
<template>
    <div class="single-trip-ticket-search-container">

        <!-- 城市信息 div -->
        <div class="md-layout countries-info-container">
            <div class="md-layout-item">
                <md-autocomplete v-model="selectedTakeOffCountry" :md-options="countries">
                <label>出发城市</label>
                </md-autocomplete>
            </div>
            
            <div class="md-layout-item">
                <md-button class="md-icon-button md-raised md-accent" @click="changeCountry()">
                    <icon name="switch" class="switch-icon" />
                </md-button>
            </div>
            
            <div class="md-layout-item">
                <md-autocomplete v-model="selectedArriveCountry" :md-options="countries">
                <label>到达城市</label>
                </md-autocomplete>
            </div>
        </div>

        <!-- 查询按钮 div -->
        <div class="md-layout search-button-container">
            <div class="md-layout-item">
                <md-button class="md-raised md-primary" v-on:click="toTicketSearchResultIndex()">查询</md-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SingleTripTicketSearch",
        data() {
            return {
                selectedTakeOffCountry: "北京",
                selectedArriveCountry: "厦门",
                selectedDate: new Date(),
                countries: [
                    "北京",
                    "天津",
                    "石家庄",
                    "郑州",
                    "太原",
                    "哈尔滨",
                    "西安",
                    "合肥",
                    "厦门"
                ]
            };
        },
        methods: {
            changeCountry() {
                let temp = this.selectedTakeOffCountry
                this.selectedTakeOffCountry = this.selectedArriveCountry
                this.selectedArriveCountry = temp
            },
            toTicketSearchResultIndex() {
                this.$store.dispatch("changeBottomNavToolBarState", false); // 这里提交一个事件来改变存储在store中主页底部的按钮导航栏绑定的值以隐藏掉主页下方的导航栏
                this.$router.push({ path: "/ticket-search-result" });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .single-trip-ticket-search-container {
        margin: 1rem auto;
    }

    // 城市对调切换图标
    .switch-icon {
        width: 1.5rem;
        height: 1.5rem;
        margin-top: .3rem;
    }

    .countries-info-container .md-layout-item:nth-child(2) {
        text-align: center;
        margin-top: .85rem;
    }

    .countries-info-container .md-layout-item:nth-child(1),
    .countries-info-container .md-layout-item:nth-child(3) {
        width: 30%;
    }

    .search-button-container {
        text-align: center;
    }
</style>