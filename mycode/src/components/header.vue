<template>
    <div id="all">
    <input type="text" id="suggestId" name="address_detail" placeholder="地址" v-model="address_detail" class="input_style" @keyup="keyupFn">
    <div id="allmap"></div>
    </div>
</template>
<script>
 //import {MP} from '../../map'
 var local;
   export default {
       data(){
           return {
               address_detail: null, //详细地址
               userlocation: {lng: "", lat: ""},
           }
       },
       created(){
          var curPoint=new BMap.Point(113.30764968, 23.1200491)
          var geoc = new BMap.Geocoder();
          geoc.getLocation(curPoint, function(rs){
            console.log(rs)
          })
       },
       mounted(){
          //
          local = new BMap.LocalSearch('广州', {
              onSearchComplete: function (r) {
                  if (r) {
                    console.log(r)
                      // console.log(r.yr.point.lat)

                  }
              }
          });
          local.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
             console.log(e)
          });     
       },
       methods:{
        initFn:function(){

        },
       	keyupFn:function(){
       	 	local.search(this.address_detail, {forceLocal: true})
       	}
       	 
       }
   }
</script>
<style scoped>
   #allmap{
        width: 400px;
        height: 400px;
        font-family: "微软雅黑";
        border:1px solid green;
    }
</style>
