<template>
	<div class="content">
		<div class="round" v-show="roundShow" @click="roundShowFn"></div>
		<transition name="fade">
			<div  class="smRoundBox" v-show="smRoundBoxShow" >
				<i class="smRound sm1"></i>
				<i class="smRound sm2"></i>
				<i class="smRound sm3"></i>
				<i class="smRound sm4"></i>
				<i class="smRound sm5"></i>
				<i class="smRound sm6"></i>
			</div>
		</transition>
		
	</div>
</template>
<script type="text/ecmascript-6">
	export default{
		data(){
			return {
				roundShow:true,
				smRoundBoxShow:true
			};			
		},
		methods:{
			toggle(){
				this.smRoundBoxShow=!this.smRoundBoxShow;
			},
			roundShowFn(){
				this.roundShow=false;
			}
		}
	};	
</script>
<style scoped>		
	@import "../css/css.css"
</style>