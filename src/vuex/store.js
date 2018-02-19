/**
 * Store of Vuex
 */
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state' // 导入适用于Vuex的 state（状态）文件
import mutations from './mutations' // 导入适用于Vuex的 mutations（事件）文件 
import actions from './actions' // 导入适用于Vuex的 actions（将要提交到mutations的事件）文件
import getters from './getters' // 导入适用于Vuex的 getters（数据获取器）文件

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
	actions,
	getters
})