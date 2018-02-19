/**
 * Getters of Vuex
 */

// 声明 getters获取器 用于获取数据
const getters = {
    bottomNavToolBarState: state => state.bottomNavToolBarState,
    ticketSearchResultList: state => state.ticketSearchResultList
}

export default getters