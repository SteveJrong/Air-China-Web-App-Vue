/**
 * Mutations of Vuex
 */

// 声明 mutations事件以使用actions提交
const mutations = {

    /**
     * 改变主页底部的按钮导航栏显示状态
     * @param {*} state vue state对象
     * @param {*} stateOfChange 要改变的状态
     */
    CHANGE_BOTTOM_NAV_TOOL_BAR_STATE(state, stateOfChange){
        state.bottomNavToolBarState = stateOfChange
    }
}

export default mutations