/**
 * Created by Administrator on 2016/12/7.
 */
var AppDispatcher = require('../dispatcher/dispatcher');
function sendInfoData(data){
    "use strict";
    var action={
        type:'sendInfoData',
        data:data
    };
    AppDispatcher.dispatch(action);
}
module.exports=sendInfoData;