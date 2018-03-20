import Axios from 'axios'
export default{
	csFn:({commit})=>{
		Axios.get('http://localhost:3000/posts')
		  .then(function (re) {
		    //state.jsonD=100;
		    commit('csFn',re);
		})

	},
	csFntow:({commit})=>{
		Axios.get('http://localhost:3000/comments')
		  .then(function (re) {
		    //state.jsonD=100;
		    commit('csFntow',re);
		})
	}
}