/**
 * Created by Administrator on 2016/11/23.
 */
var AppDispatcher=require('../dispatcher/dispatcher');
function sendFontState(footState){
    var action={
        type:'foot_change',
        data:footState
    };
    AppDispatcher.dispatch(action);
}
module.exports={
    sendFontState:sendFontState
};