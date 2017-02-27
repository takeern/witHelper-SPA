/**
 * Created by Administrator on 2016/12/7.
 */
var AppDispatcher = require('../dispatcher/dispatcher');
function sendLoginInfo(infodata){
    var action={
        type:'sendLoginInfoData',
        data:infodata
    };
    AppDispatcher.dispatch(action);
}
module.exports=sendLoginInfo;
