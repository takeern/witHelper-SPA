/**
 * Created by Administrator on 2016/12/7.
 */
var reqwest=require('reqwest');
require('xhr2');
var sendChooseLesson=require('../actions/sendChooseLessonData');
function getChooseLessonData(){
    "use strict";
    reqwest({
        url: '/getChooseLesson'
        , method: 'post'
        , contentType:'text/html'
        , success: function (resp) {
            var data=JSON.parse(resp.response);
            sendChooseLesson(data);
        }
    });
}
module .exports=getChooseLessonData;
