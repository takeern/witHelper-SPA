/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var ReactDOM=require('react-dom');
var ItemContent=require('./itemContent/Item_content_wrapper.js');
function itemContentRender(id){
    "use strict";
    console.log(id);
    var item={
        'contentData':{
            "id":'1',
            "title":"第三次教育总结大会",
            'startTime':'2016-10-11 14:00',
            'finishTime':'2016-10-11 14:00',
            'site':'L4012',
            'organizer':'材料学院 材料学院',
            'ticket':'免费',
            'des':'为了展示好身材，江苏淮安姑娘文文在零下1℃的天气，只穿了薄毛衣和裙子去约会'
        },
        'footData':{
        'name1':'材料学院宣传部 ',
            'labelState':'认证'
    }
    };
    ReactDOM.render(<ItemContent />,document.getElementById('itemContent'));
}
module.exports =itemContentRender;