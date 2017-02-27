/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var ReactDOM=require('react-dom');
var getInfoData=require('./getData/getInfoData.js');
var Info_wrapper=require('./info_form/info_form_wrapper.js');
var Item_wrapper=require('./item/item_wrapper');
var xmxhStore=require('../stores/sendStore/xhxmStore');
var Lesson_table_wrapper=require('./table/Lesson_table_wrapper.js');
var getChooseLessonData=require('../getData/getChooseLesson');
var Choose_lesson_wrapper=require('./choose_lesson/Choose_lesson_wrapper');
var Lesson_login_wrapper=require('./Lesson_login/Lesson_login_wrapper');
var Person_wrapper=require('./person/person_wrapper');
var getAccount=require('../getData/getAccount');
var BeStart=require('./beStart/beStart_wrapper');
var getLesson=require('../getData/getLesson');
function containerRender(choose){
    "use strict";
    var data;
    switch (choose){
        case "活动":
            getInfoData();
            ReactDOM.render(<Item_wrapper />,document.getElementById('item_container'));
            break;
        case "发布":
            ReactDOM.render(<Info_wrapper />,document.getElementById('item_container'));
            break;
        case'课表':
            ReactDOM.render(<Lesson_table_wrapper />,document.getElementById("item_container"));
            if(xmxhStore.getState()==='success'){
                getLesson();
            }
            else{
                ReactDOM.render(<Lesson_login_wrapper />,document.getElementById('itemContent'));
            }
            break;
        case "抢课":
            ReactDOM.render(<Choose_lesson_wrapper />,document.getElementById('item_container'));
            console.log(xmxhStore.getState());
            if(xmxhStore.getState()==='success'){
                getChooseLessonData();
            }
            else{
                ReactDOM.render(<Lesson_login_wrapper />,document.getElementById('itemContent'));
            }
            break;
        case "分享":
            ReactDOM.render(<BeStart/>,document.getElementById('itemContent'));
            break;
        case "我":
            ReactDOM.render(<Person_wrapper />,document.getElementById('item_container'));
            getAccount();
            break;
    }
}
module .exports=containerRender;