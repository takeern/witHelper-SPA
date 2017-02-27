/**
 * Created by Administrator on 2016/12/7.
 */
var AppDispatcher = require('../dispatcher/dispatcher');
var Infodata=[
    {
        "id":'1',
        "name":"材料学院",
        "labelState":true,
        "title":'第三次教育总结大会',
        "des":"为了展示好身材，江苏淮安姑娘文文在零下1℃的天气，只穿了薄毛衣和裙子去约会",
        "site":'L4012',
        "time":'2016-10-11 14:00'
    },{
        "id":'2',
        "name":"材料学院",
        "labelState":true,
        "title":'第三次教育总结大会',
        "des":"为了展示好身材，江苏淮安姑娘文文在零下1℃的天气，只穿了薄毛衣和裙子去约会",
        "site":'L4012',
        "time":'2016-10-11 14:00'
    },{
        "id":'3',
        "name":"材料学院",
        "labelState":true,
        "title":'第三次教育总结大会',
        "des":"为了展示好身材，江苏淮安姑娘文文在零下1℃的天气，只穿了薄毛衣和裙子去约会",
        "site":'L4012',
        "time":'2016-10-11 14:00'
    },{
        "id":'4',
        "name":"材料学院",
        "labelState":true,
        "title":'第三次教育总结大会',
        "des":"为了展示好身材，江苏淮安姑娘文文在零下1℃的天气，只穿了薄毛衣和裙子去约会",
        "site":'L4012',
        "time":'2016-10-11 14:00'
    }
];//描述item数据，后面该处数据由ajax获取数据
function  getContainerData(){
    "use strict";
    return Infodata;
}
module .exports=getContainerData;