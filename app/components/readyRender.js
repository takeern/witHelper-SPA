/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var ReactDOM=require('react-dom');
var set_header=require('./header/header');
var containerRender=require('./containerRender');
var itemContentRender=require('./itemContentRender.js');
var Restart=require('./restart/Restart');
function readyRender(page){
    "use strict";
    var header={};
    switch (page){
        case "活动":
             ReactDOM.render(<Restart />,document.getElementById('itemContent'));
             header.headerNavLIData=[//描述header li中数据  class 按boostrap栅格 12/id数
                {text:'活动',id:'1',class:'col-xs-6'},
                {text:'发布',id:'2',class:'col-xs-6'}
            ];
            header.topSpanData=[//描述header上右侧图标 如信息表单
                {id:'1',class:'glyphicon glyphicon-envelope header_envelope'}
            ];
            header.title='活动';//标题text
            ReactDOM.render(<Restart />,document.getElementById('header'));
            set_header(header);
            containerRender('活动');
            break;
        case "课程":
            ReactDOM.render(<Restart />,document.getElementById('itemContent'));
            header.headerNavLIData=[//描述header li中数据  class 按boostrap栅格 12/id数
                {text:'课表',id:'1',class:'col-xs-6'},
                {text:'抢课',id:'2',class:'col-xs-6'}
            ];
            header.topSpanData=[//描述header上右侧图标 如信息表单
                {id:'1',class:'glyphicon glyphicon-envelope header_envelope'}
            ];
            header.title='课程';//标题text
            ReactDOM.render(<Restart />,document.getElementById('header'));
            set_header(header);
            containerRender('课表');
            break;
        case '分享':
            containerRender('分享');
            break;
        case '个人':
            ReactDOM.render(<Restart />,document.getElementById('itemContent'));
            header.headerNavLIData=[
                {text:'我',id:"1",class:'col-xs-12'}
            ];
            header.topSpanData=[//描述header上右侧图标 如信息表单
                {id:'1',class:'glyphicon glyphicon-envelope header_envelope'}
            ];
            header.title='我';
            set_header(header);
            containerRender('我');
    }
}
module .exports= readyRender;
