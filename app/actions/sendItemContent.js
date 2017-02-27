/**
 * Created by Administrator on 2016/12/7.
 */
var AppDispatcher=require('../dispatcher/dispatcher');
function sendItemContent(item){
    var action={
        type:'openItemContent',
        data:item
    };
    console.log('send');
    AppDispatcher.dispatch(action);
}
module.exports={
    sendItemContent:sendItemContent
};