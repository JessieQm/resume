//引入swiper
var Swiper = require('./components/swiper/swiper-3.3.1.min');
//引入animate.js
var swiperAnimate = require('./components/swiper/swiper.animate1.0.2.min');

//确保 html中 ani代码
//animate.js中接口暴露
//引入animate.js
//引入动画对象时 用  对象.方法
//sass中引入animate.css
// write your own (./my-zepto)

var mySwiper = new Swiper ('.swiper-container', {
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
})   


var $ = require('zepto-modules/zepto');
require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/touch');
module.exports = $;
$('#theScroll').hide();
$('#swiper-container').show();
$('#enter').tap(function(){
    console.log(11);
    $.post('/api/skill',{},function(response){
        console.log(response);
        $('#thelist li').remove(); 
        var li='';
        for (var i = 0; i < response.length; i++) {
            console.log(response[i]);  
            li+="<li>";   
            li+='<h2>'+response[i].category+'</h2>';
            li+='<p>涉及内容：<span>'+response[i].name+'</span></p>';
            li+='<p>学习时间：<span>'+response[i].time+'</span></p>';
            li+='<p>掌握程度：<span>'+response[i].level+'</span></p>';
            li+='</li>';
        } 
        $('#thelist').append($(li))
        // $('#thelist').append($(li))；

         $('#theScroll').show();
         $('#swiper-container').hide();
          var iScroll = require('./components/iscroll/iscroll');
          var myScroll = new iScroll('#wrapper',{mouseWheel:true});
          document.addEventListener('touchmove',function(e){
                e.preventDefault();
               })
    });
   

});
    $('#project').tap(function(){
      console.log(13);
        
      $.post('/api/project',{},function(response){
          console.log(response);
          $('#thelist li').remove(); 
          var li='';
          for (var i = 0; i < response.length; i++) {
              console.log(response[i]);  
              li+="<li>";   
              li+='<h2>'+response[i].category+'</h2>';
              li+='<p>涉及内容：<span>'+response[i].name+'</span></p>';
              li+='<p>学习时间：<span>'+response[i].url+'</span></p>';
              li+='<p>掌握程度：<span>'+response[i].image+'</span></p>';
              li+='<p>掌握程度：<span>'+response[i].description+'</span></p>';
              li+='<p>掌握程度：<span>'+response[i].detail+'</span></p>';
              li+='<p>掌握程度：<span>'+response[i].tech+'</span></p>';
              li+='</li>';
          }
          $('#thelist').append($(li))
            var iScroll = __webpack_require__(8);
            var myScroll = new iScroll('#wrapper',{mouseWheel:true});
            document.addEventListener('touchmove',function(e){
                  e.preventDefault();
                 })
      });
      

  });
    $('#my').tap(function(){
      console.log(13);
      $.post('/api/work',{},function(response){
          console.log(response);
          $('#thelist li').remove();
          var li='';
          for (var i = 0; i < response.length; i++) {
              console.log(response[i]);  
              li+="<li>";   
              li+='<h2>'+response[i].category+'</h2>';
              li+='<p>涉及内容：<span>'+response[i].category+'</span></p>';
              li+='<p>学习时间：<span>'+response[i].name+'</span></p>';
              li+='<p>掌握程度：<span>'+response[i].url+'</span></p>';
              li+='<p>掌握程度：<span>'+response[i].image+'</span></p>';
              li+='<p>掌握程度：<span>'+response[i].time+'</span></p>';
              li+='<p>掌握程度：<span>'+response[i].posts+'</span></p>';
              li+='</li>';
          }
          $('#thelist').append($(li))
            var iScroll = __webpack_require__(8);
            var myScroll = new iScroll('#wrapper',{mouseWheel:true});
            document.addEventListener('touchmove',function(e){
                  e.preventDefault();
                 })
      });
      

  });


// 引入jweixin.js
// var wx = require('./components/weixin/jweixin');
// $.post("http://845286359.applinzi.com/php/getsign.php",{
//       url:window.location.href
//     },function(data){
//             pos=data.indexOf('}');
//             dataStr= data.substring( 0,pos+1);
//             objData=JSON.parse(dataStr);
//             console.log(dataStr);
//             wx.config({
//             debug: true,
//             appId: objData.appId,
//             timestamp: objData.timestamp,
//             nonceStr: objData.nonceStr,
//             signature: objData.signature,
//             jsApiList: [
//              'getLocation','openLocation'
//             ]
//           });
        
// })



// var b=document.getElementById('myposition');
//         b.onclick=function(){
//       wx.getLocation({

//             type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        
//             success: function (res) {
        
//                 var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        
//                 var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        
//                 var speed = res.speed; // 速度，以米/每秒计
        
//                 var accuracy = res.accuracy; // 位置精度
                
//                 wx.openLocation({
    
//                     latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
                
//                     longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
                
//                     name: '', // 位置名
                
//                     address: '', // 地址详情说明
                
//                     scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
                
//                     infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
                
//                 });
            
    
//           }
    
//       });
    
//     }
