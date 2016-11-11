<?php
header("Access-Control-Allow-Origin:*");

$postData = '[
    {
        "category":"企业网站",
        "name":"和瑞控股",
        "url":"http://www.horays.com/",
        "image":"images/bg3.png",
        "description":"和瑞控股公司的官方网站，详细介绍了和瑞控股公司的主要情况",
        "detail":"项目耗时3周，主要处理前端页面及程序嵌套，当时并未要求移动端适配，故该网站只适应于PC端应用",
        "tech":"Html、Css2、Coldfusion等"
    },
    {
        "category":"平台门户",
        "name":"珍诚医药",
        "url":"http://www.zc511.com/",
        "image":"images/bg3.png",
        "description":"医药电商先锋平台，国内医药电商B2B第一平台，年销售额超25亿",
        "detail":"长期维护，功能迭代，包括平台整体UI改进以及功能模块的增加与性能的优化",
        "tech":"Html、Css2、Javascript、Jquery、Java等"
    },
    {
        "category":"平台门户",
        "name":"网上药博会",
        "url":"http://www.53118.com/",
        "image":"images/bg3.png",
        "description":"网上药博会，网上药品及药企展览平台",
        "detail":"项目初建耗时4月，从需求到页面设计，从页面设计到前端实现，从页面实现到功能开发和集成，从本地测试到平台上线等全程处理",
        "tech":"Html、Css2、Javascript、Jquery、Coldfusion等"
    },
    {
        "category":"移动平台",
        "name":"政教通",
        "url":"http://www.zhengjiaotong.com/",
        "image":"images/bg3.png",
        "description":"儿童健康成长护航者",
        "detail":"项目初建耗时3月，主要包括数据支撑平台的建设、移动端Hybrid模式的应用及开发",
        "tech":"Html5、Css3、Jquery、AngularJs、Java等"
    }
]';

//$dataArr =  json_decode($postData);
//echo json_encode($dataArr[2]);
function json_clean_decode($json, $assoc = false, $depth = 512, $options = 0) {
    // search and remove comments like /* */ and //
    $json = preg_replace("#(/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+/)|([\s\t]//.*)|(^//.*)#", '', $json);
    
    if(version_compare(phpversion(), '5.4.0', '>=')) {
        $json = json_decode($json, $assoc, $depth, $options);
    }
    elseif(version_compare(phpversion(), '5.3.0', '>=')) {
        $json = json_decode($json, $assoc, $depth);
    }
    else {
        $json = json_decode($json, $assoc);
    }

    return $json;
}

echo json_encode(json_clean_decode($postData));
?>