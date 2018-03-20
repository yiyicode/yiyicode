import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './mutations'
import actions from './action'


export default new Vuex.Store({
	modules:{
		mutations
	},
	actions
})