/**
 * Created by Administrator on 2016/12/7.
 */
var AppDispatcher = require('../dispatcher/dispatcher');
function sendChooseLessonData(data){
    "use strict";
    var action={
        type:'sendChooseLessonData',
        data:data
    };
    AppDispatcher.dispatch(action);
}
module .exports=sendChooseLessonData;


