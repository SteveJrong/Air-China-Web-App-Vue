/**
 * Actions of Vuex
 */

 // 声明 actions事件
const actions = {

    /**
     * 改变主页底部的按钮导航栏显示状态
     * @param {*} {commit} 
     * @param {*} stateOfChange 
     */
    changeBottomNavToolBarState({commit}, stateOfChange) {
        commit('CHANGE_BOTTOM_NAV_TOOL_BAR_STATE', stateOfChange)
    }
}

export default actions