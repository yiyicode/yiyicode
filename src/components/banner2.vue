<template>
 
  <div>
    <div class="slide" :style="{width: stringIf?slideWidth:slideWidth+'px'}">
      <div class="imgbox">
        <a >
        <transition name="fade-trans">
          <img  :src="slideData[onIndex].src">
        </transition>
        <transition name="fade-trans-old">
          <img  :src="slideData[onIndex].src">
        </transition>
        </a>
        
        <em @click="curBtnClick(pre)">&lt;</em><em @click="curBtnClick(next)">&gt;</em>
      </div>
      <div class="curBtn"><i v-for="(el,index) in slideData" @click="curBtnClick(index)"></i></div>
    </div>
  </div>
 
</template>
 
<script>
 
export default {
  props: { 
    slideData: {
      type: Array,
      default:()=> {
        return []
      },
    },
    slideWidth:{Number,String}//定义传值的类型,String时只能为100%
  },
  data(){
            return {
              onIndex:0,
              stringIf:false,
              isShow: true
            }
  },  
  created: function (){
    if (this.slideWidth.constructor===String) {
      this.stringIf=true;
    }
  },
  computed:{
    pre(){
      if (this.onIndex==0) {
        return this.slideData.length-1
      }else {
        return this.onIndex-1
      }
      //console.log(this.onIndex)
    },
    next(){      
      if (this.onIndex==this.slideData.length-1) {
        return 0
      }else {
        return this.onIndex+1;
      }
      //console.log(this.onIndex)
      
    }
  },
  methods:{
    curBtnClick (index){
      this.onIndex=index;
      /*this.isShow = false;      
      setTimeout(() => {
        this.isShow = true;
        this.onIndex=index;
      }, 10)*/
    }
    

  }
 
}
 
</script>
 
<style>
.slide{position: relative; margin:0 auto; }
.imgbox {height: 100%;}
.imgbox img{width: 100%; position: absolute; top: 0; left: 0;}
.imgbox em{position: absolute; left: 20px; top: 50%; width: 30px; height: 30px; background: #ccc; margin-top: -10px; cursor: pointer; font-size: 28px; color: #fff;}
.imgbox em+em{left:initial;right: 20px;}
.imgbox em:hover{background: #FFF; color: #000;}
.curBtn {position: absolute; bottom: 30px; left: 50%;}
.curBtn i{width: 10px; height: 10px; display:inline-block; border-radius: 50%; background: #fff; margin-left: 15px;}
.fade-trans-enter {
  animation: move 1s ease;  
}
@keyframes move{
  0%{opacity: 0; transform: translateX(900px);}
  100%{opacity: 1; transform: translateX(0);}
}
.fade-trans-old {
  animation: moveold 1s ease; 
}
@keyframes moveold{
  0%{opacity: 1; transform: translateX(0);}
  100%{opacity: 0; transform: translateX(-900px);}
}
/*.fade-trans-enter {
  transition: all .5s;
  transform: translateX(900px);
}
.fade-trans-old-leave {
  transition: all .5s;
  transform: translateX(-900px);
}*/

</style> 