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
    // console.log(11);
     $('#footer div').first().addClass('active');
    $.post('/api/skill',{},function(response){
        $('#thelist li').remove(); 
        var li='';
        for (var i = 0; i < response.length; i++) {
            console.log(response[i]);  
            li+="<li class='kill'>";   
            // li+='<h2>'+response[i].category+'</h2>';
            li+="<div><img src='"+response[i].image+"'/>";
            li+='<div><span class="tit">'+response[i].category+'</span></p>';
            li+='<p>涉及内容：<span>'+response[i].name+'</span></p>';
            li+='<p>学习时间：<span>'+response[i].time+'</span></p>';
            li+='<p>掌握程度：<span>'+response[i].level+'</span></p></div>';
            li+='</div></li>';
        } 
        $('#thelist').append($(li));
        $('#thelist').append($(li));
          $('.kill img').tap(function(){
              plus.gallery.save( $(this).attr('src'), function () {
          alert( "保存图片到相册成功" );
        } );
             });
         $('#theScroll').show();
         $('#swiper-container').hide();
          var iScroll = require('./components/iscroll/iscroll');
              myScroll = new iScroll('#wrapper',{mouseWheel:true});
          document.addEventListener('touchmove',function(e){
                e.preventDefault();
               })

    });
   

});

$('#skill').tap(function(){
    console.log(11);
    $('#footer div').removeClass('active');
     $(this).addClass('active');
    $.post('/api/skill',{},function(response){
        console.log(response);
        $('#thelist li ').remove(); 
        var li='';
        for (var i = 0; i < response.length; i++) {
            console.log(response[i]);  
            li+="<li class='kill'>";   
            // li+='<h2>'+response[i].category+'</h2>';
            li+="<div><img src='"+response[i].image+"'/>";
            li+='<div><span class="tit">'+response[i].category+'</span></p>';
            li+='<p>涉及内容：<span>'+response[i].name+'</span></p>';
            li+='<p>学习时间：<span>'+response[i].time+'</span></p>';
            li+='<p>掌握程度：<span>'+response[i].level+'</span></p></div>';
            li+='</div></li>';
        } 
        $('#thelist').append($(li))
          
          myScroll.refresh();
    });
   

});



    $('#project').tap(function(){    
     $('#footer div').removeClass('active');
     $(this).addClass('active'); 
      $.post('/api/project',{},function(response){
          console.log(response);

          $('#thelist li').remove(); 
          var li='';
          for (var i = 0; i < response.length; i++) {
              console.log(response[i]);  
              li+="<li class='proli'>";   
              li+='<h2>'+response[i].category+'</h2>';//
              li+='<img src="'+response[i].image+'"/>';
              li+='<p>网站名称：<span>'+response[i].name+'</span></p>';
              li+='<p>网站链接：<span>'+response[i].url+'</span></p>';
              li+='<p>公司描述：<span>'+response[i].description+'</span></p>';
              li+='<p>项目内容：<span>'+response[i].detail+'</span></p>';
              li+='<p>涉及内容：<span>'+response[i].tech+'</span></p>';
              li+='</li>';
          }
          $('#thelist').append($(li)); 
          myScroll.refresh();
      });
      

  });
    $('#process').tap(function(){
      //console.log(13);
       $('#footer div').removeClass('active');
       $(this).addClass('active');
      $.post('/api/work',{},function(response){
          console.log(response);
          $('#thelist li').remove();
          var li='';
          for (var i = 0; i < response.length; i++) {
              console.log(response[i]);  
              li+="<li class='processli'> <div>";   
              li+='<h2>'+response[i].name+'</h2>';
              li+='<p>公司性质：<span>'+response[i].category+'</span></p>';
              li+='<p>公司网址：<span>'+response[i].url+'</span></p>';
              li+='<p>掌握程度：<span>'+response[i].image+'</span></p>';
              li+='<p>工作时间：<span>'+response[i].time+'</span></p>';
              li+='<p>担任职务：<span>'+response[i].posts+'</span></p>';
              li+='</div></li>';
          }
            $('#thelist').append($(li))
             myScroll.refresh();
      });
      

  });

  // $('#my').tap(function(){
  //     //console.log(13);
       
  //      $('#footer div').removeClass('active');
  //      $(this).addClass('active');
  //      $('#thelist li').remove();
  //      myScroll.refresh();
  //         var li='';
  //             li+="<li class='my'>"; 
  //             li+="<div class='photo'>既然选择了远方，便只顾风雨兼程···</div>"; 
  //             li+="<p class='link' >敬候佳音</p>";
  //             li+="<span class='tel'>TEL:13053976636</span>";
  //             li+="<img class='ewm' src='images/a67f2d67-2741-4616-81f1-7af20f2a827f-8944.png'/>";
  //             li+="<img  class='computer' src='images/223f8a6b-e045-4321-b114-fef41e187e36.png'/>";
  //             li+='</li>';
  //           $('#thelist').append($(li));

  // });
// //引入jweixin.js
// var src="";
// if(localStorage.getItem('photo')){
//    src=localStorage.getItem('photo');
// }else{
//   src="images/a.jpg";
// }
// $('#photo').attr('src',src);

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
//              'getLocation','openLocation','chooseImage'
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
//     var m=document.getElementById('mycloum');
//         m.onclick=function(){
//          wx.chooseImage({
//                 count: 1, // 默认9
//                 sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
//                 sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
//                 success: function (res) {
//                     var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
//                     $('#photo').attr('src',localIds[0]);
//                     localStorage.setItem('photo',localIds[0]);
//                 }
//         });

    
//     }
document.getElementById('mycloum').onclick=captureImage;
      // 扩展API加载完毕后调用onPlusReady回调函数 
    document.addEventListener( "plusready", onPlusReady, false );
    // 扩展API加载完毕，现在可以正常调用扩展API 
    function onPlusReady() {
      console.log("plusready");
    }
    // 拍照
    function captureImage(){
      alert(1);
      var cmr = plus.camera.getCamera();
      var res = cmr.supportedImageResolutions[0];
      var fmt = cmr.supportedImageFormats[0];
      console.log("Resolution: "+res+", Format: "+fmt);
      cmr.captureImage( function( path ){
          alert( "Capture image success: "+path);
          plus.io.resolveLocalFileSystemURL( path, function( entry ) {
            // 可通过entry对象操作test.html文件 
//            alert(entry.toLocalURL());
            document.getElementById('photo').src=entry.toLocalURL();
          }, function ( e ) {
            alert( "Resolve file URL failed: " + e.message );
          } );
          
        },
        function( error ) {
          alert( "Capture image failed: " + error.message );
        },
        {resolution:res,format:fmt}
      );
    }  
    
    // var my=document.getElementById('my');
    // my.onclick=find;
    // document.addEventListener( "plusready", function(){
    //   }, false );
    //   function find(){
    //     plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE, function (addressbook) {
    //       addressbook.find(["displayName","phoneNumbers"],function(contacts){
    //       var list=document.getElementById('thelist');
    //           list.innerHTML="";
    //         for(var i=0;i<contacts.length;i++){
    //           var li=document.createElement('li');
    //           li.innerHTML+='姓名：'+contacts[i].displayName+'电话：'+contacts[i].phoneNumbers[0].value;
    //           list.appendChild(li);
    //         }
            
    //       }, function () {
    //         alert("error");
    //       },{multiple:true});
    //     },function(e){
    //       alert("Get address book failed: " + e.message);
    //     });
    //   }    
    // 扩展API加载完毕后调用onPlusReady回调函数 
  document.getElementById('mycloum').onclick=captureImage;
        // 扩展API加载完毕后调用onPlusReady回调函数 
      document.addEventListener( "plusready", onPlusReady, false );
      // 扩展API加载完毕，现在可以正常调用扩展API 
      function onPlusReady() {
        console.log("plusready");
      }
      // 拍照
      function captureImage(){
//        alert(1);
        var cmr = plus.camera.getCamera();
        var res = cmr.supportedImageResolutions[0];
        var fmt = cmr.supportedImageFormats[0];
        console.log("Resolution: "+res+", Format: "+fmt);
        cmr.captureImage( function( path ){
            alert( "Capture image success: "+path);
            plus.io.resolveLocalFileSystemURL( path, function( entry ) {
              // 可通过entry对象操作test.html文件 
  //            alert(entry.toLocalURL());
              document.getElementById('photo').src=entry.toLocalURL();
            }, function ( e ) {
              alert( "Resolve file URL failed: " + e.message );
            } );
          },
          function( error ) {
            alert( "Capture image failed: " + error.message );
          },
          {resolution:res,format:fmt}
        );
      }  
      
      // var my=document.getElementById('my');
      // my.onclick=find;
      // document.addEventListener( "plusready", function(){
      //   }, false );
      //   function find(){
      //     plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE, function (addressbook) {
      //       addressbook.find(["displayName","phoneNumbers"],function(contacts){
      //       var list=document.getElementById('thelist');
      //           list.innerHTML="";
      //         for(var i=0;i<contacts.length;i++){
      //           var li=document.createElement('li');
      //           li.innerHTML+='姓名：'+contacts[i].displayName+'电话：'+contacts[i].phoneNumbers[0].value;
      //           list.appendChild(li);
      //         }
              
      //       }, function () {
      //         alert("error");
      //       },{multiple:true});
      //     },function(e){
      //       alert("Get address book failed: " + e.message);
      //     });
      //   }    
      // 扩展API加载完毕后调用onPlusReady回调函数 
      document.addEventListener( "plusready", onPlusReady, false );
      // 扩展API加载完毕，现在可以正常调用扩展API 
      
      // 从相册中选择图片 
      function galleryImg() {
        // 从相册中选择图片
        console.log("从相册中选择图片:");
          plus.gallery.pick( function(path){
            console.log(path);
            document.getElementById('photo').src=path;
          }, function ( e ) {
            console.log( "取消选择图片" );
          }, {filter:"image"} );
      }
      // $('mycloum').tap(function(){
      //   alert(1);
      //   galleryImg();
      // });
     
//      var kill= document.getElementsByClassName('.kill')[0];
//      var img= kill.getElementsByTagName(img);
//      $(img).
     
      var map=null;
      var first=true;
      var isclick=false;
      $('#myposition').click(function(){
        $('#mapWrap').show();
       plus.geolocation.getCurrentPosition( function ( p ) {
         alert( "Geolocation\nLatitude:" + p.coords.latitude + "\nLongitude:" + p.coords.longitude + "\nAltitude:" + p.coords.altitude );
         map = new plus.maps.Map("map");
         var point = new plus.maps.Point(p.coords.longitude ,p.coords.latitude);
         map.centerAndZoom( point,18 );
         map.showUserLocation( true );
           plus.maps.Map.reverseGeocode(point,{},function(event){
             var address = event.address;  // 转换后的地理位置
             var point = event.coord;   // 转换后的坐标信息
             var coordType = event.coordType;  // 转换后的坐标系类型
             var span=document.getElementById('mapWrap').getElementsByTagName('span')[0];
             span.innerHTML="当前附近位置:"+address;
         
           },function(e){
             alert("Failed:"+JSON.stringify(e));
           });
           
       }, function ( e ) {
         alert( "Geolocation error: " + e.message );
       } );
        
      });
        
      $('#close').tap(function(){
        if(isclick){
          map.hide();
        }else{
          map.show();
        }
        isclick=!isclick;
//         $('#mapWrap').hide();
      });
