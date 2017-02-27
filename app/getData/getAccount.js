/**
 * Created by Administrator on 2017/1/18.
 */
var reqwest=require('reqwest');
require('xhr2');
var sendAccount=require('../actions/sendAccount');
function getChooseLessonData(){
    "use strict";
    reqwest({
        url: '/getAccount'
        , method: 'get'
        , contentType:'text/html'
        , success: function (resp) {
            var data=JSON.parse(resp.response);
            sendAccount(data)
        }
    });
}
module .exports=getChooseLessonData;