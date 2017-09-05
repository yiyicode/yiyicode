<template>
  <div ref="root" style="user-select: none;-webkit-user-select: none;overflow: hidden; position: relative; width: 100%; height: 380px; background: #8e0505;">
    <div class="sliderWrap" >
      <ul id="bannerCenter">
        <li v-for="(el,index) in imgArray" class="verticalCenter picbox">
          <img :src="el.url" >
        </li>
      </ul>
      <div class="subBtn horizaCenter">
        <i v-for="(item,index) in imgArray" @click="clickSliderCircle(index)"  class="circle" :class="{circleSelected:item.selected}">
        </i>
      </div>
    </div>
    <div @click="clickLeft" class="arrowLeft verticalCenter horizaCenter"></div>
    <div @click="clickRight" class="arrowRight verticalCenter horizaCenter"></div>
    
    
  </div>
</template>
<script>
  const SCREEN_WIDTH=document.body.clientWidth
  const SCREEN_HEIGHT=document.body.scrollHeight

  var bannerLen=0
  var second=3//slider 时间间隔
  var timer=null;
  var sliderWrap_w,bannerCenter,sliderWrap;
  var debugScale=1.0//测试用可调整为小于1

  var canClick=true
  export default({
    data:function(){
      return{
        _width:SCREEN_WIDTH+'px',
        _height:SCREEN_HEIGHT+'px',
        cur:0,
        on:0,
        plusMinus:true,
        direction:'left',
        flag:false,
        top:0,
        sliderWrap:true,
        translateX:'scale('+debugScale+') translateX(0px)',
        imgArray:[
          {
            x:0,
            title1:'这里是标题1',
            tilte2:'标题2标题22222',
            click_url:'http://www.bing.com',
            url:'static/images/01.jpg',
            selected:false,
          },
          {
            x:0,
            title1:'这里是标题1',
            tilte2:'覆盖十余种胎儿染色体疾病，体验升级，呵护加倍',
            click_url:'http://www.bing.com',
            url:'static/images/02.jpg',
          },
          {
            x:0,
            title1:'这里是标题1',
            tilte2:'标题2标题22222',
            click_url:'http://www.bing.com',
            url:'static/images/03.jpg',
          },
          {
            x:0,
            title1:'这里是标题1',
            tilte2:'标题2标题22222',
            click_url:'http://www.bing.com',
            url:'static/images/04.jpg',

          }
        ],
        itemList:[]
      }
    },
    mounted:function(){
      sliderWrap=this.$refs.root.querySelector('.sliderWrap');
      sliderWrap_w=sliderWrap.offsetWidth;
      bannerCenter=document.getElementById('bannerCenter');
      bannerLen=this.imgArray.length;
      //alert(bannerLen)
      bannerCenter.style.width =sliderWrap_w*bannerLen+'px';

    },
    methods:{
      slideFn: function(){
        var _this=this;
        if (_this.cur==bannerLen-1&&_this.flag==false) {
              $('#bannerCenter').find('li:first').css({
                'position':'relative',
                'left': bannerCenter.style.width
              });
              _this.cur=0;
              _this.flag=false;
        }else{
          if (this.direction=='left') {
            _this.cur++
          }else {
            _this.cur--
            if (_this.cur<0) {
                $('#bannerCenter').find('li:last').css({
                    'position':'relative',
                    'left': '-4008px'
                  });
                  _this.cur=bannerLen-1;
                  _this.flag=true;
            }
          }          
        };
        if (this.direction=='left') {
          this.on++;//使用第二个当前计数函数，是为了让其在下面的animate运行了最后一个后（长度加1），再赋值为0，也就是展示了最后一个的切换动画，再直接跳回第一个。
        }else {
          //debugger;
          this.on--;
          
        }
        /*if (this.cur<0) {
          this.plusMinus=false;
        }*/
        $('#bannerCenter').animate({
          'left': -(sliderWrap_w*this.on)},500,function(){
            if (_this.cur==0&&_this.flag==false) {
              _this.on=0;
              $('#bannerCenter').find('li:first').css({
                'position':'static'
              });
              $('#bannerCenter').css('left', '0');         
            }else if (this.on<-1) {
                  $('#bannerCenter').find('li:first').css({
                      'position':'relative',
                      'left': '-4008px'
                    });
                  $('#bannerCenter').css('left', '0');
                  $('#bannerCenter').find('li:first').attr('style', '');
                    _this.cur=bannerLen-1
            }
            
          });
      },
      clickLeft:function(){
        this.direction='left';
        this.plusMinus=true;
        this.slideFn();       
        
      },
      clickRight:function(){
        this.plusMinus=false;
        this.direction='right';
        /*this.on=bannerLen;
        this.cur=bannerLen;*/
        //$('#bannerCenter').css('left', -);
        //$('#bannerCenter li').css('float', 'right');
        this.slideFn();       
        
      }
    }

  })

</script>
<style scoped>
  @import '../css/css.css'


</style>