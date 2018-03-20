import getters from './getters'
// console.log(getters)

const state={
	'jsonD':1,
	'arr':[]
}

const mutations={
	['csFn'](state,re){
		console.log(re)
		state.arr=re.data;
	},
	['csFntow'](state,re){
		state.arr=re.data;
	}
}

export default {
	state,
	mutations,
	getters:getters.getters
}
