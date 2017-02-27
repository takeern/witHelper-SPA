/**
 * Created by Administrator on 2017/1/5.
 */
var reqwest=require('reqwest');
require('xhr2');
var sendLesson=require('../actions/sendLesson');
function getLesson(xh,mm){
    "use strict";
    reqwest({
        url: '/getLesson'
        , method: 'post'
        , data: { xh: xh, mm: mm }
        , success: function (resp) {
            var data=JSON.parse(resp.response);
            if(data.state==='账号密码错误'){
                alert(data.state+'!');
            }
            else {
                sendLesson(data);
            }
        }
    })
}
module .exports=getLesson;