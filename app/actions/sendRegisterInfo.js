/**
 * Created by Administrator on 2016/12/7.
 */
var AppDispatcher = require('../dispatcher/dispatcher');
function sendRegisterInfo(infodata){
    var action={
        type:'sendRegisterInfoData',
        data:infodata
    };
    AppDispatcher.dispatch(action);
}
module.exports=sendRegisterInfo;