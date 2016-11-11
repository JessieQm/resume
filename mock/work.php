<?php
header("Access-Control-Allow-Origin:*");

$postData = '[
    {
        "category":"私营企业",
        "name":"杭州易网灵杰科技有限公司",
        "url":"http://www.eoner.com/",
        "image":"images/eoner.png",
        "time":"2008年-2010年",
        "posts":"技术副总",
        "reportto":"总经理",
        "peoples":"30",
        "projects":"商企通视讯服务平台等"
    },
    {
        "category":"民营企业",
        "name":"浙江珍诚医药股份有限公司",
        "url":"http://www.zc511.net/",
        "image":"images/zc511.png",
        "time":"2010年-2015年",
        "posts":"技术总监",
        "reportto":"总经理",
        "peoples":"30",
        "projects":"zc511.com、53118.com、learn511.com、珍诚掌上医药、客户B2C项目手机版、业务员管理系统等"
    },
    {
        "category":"私营企业",
        "name":"睿眼通（上海）信息科技有限公司",
        "url":"http://www.ruiyantong.com/",
        "image":"images/ruiyantong.png",
        "time":"2015年-2016年",
        "posts":"技术总监",
        "reportto":"总经理",
        "peoples":"2",
        "projects":"ruiyantong.com、zhengjiaotong.com、政教通App等"
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