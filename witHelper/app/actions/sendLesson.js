/**
 * Created by Administrator on 2016/12/7.
 */
var AppDispatcher = require('../dispatcher/dispatcher');
function sendLesson(lessonData){
    var action={
        type:'sendLessonData',
        data:lessonData
    };
    AppDispatcher.dispatch(action);
}
module.exports=sendLesson;
