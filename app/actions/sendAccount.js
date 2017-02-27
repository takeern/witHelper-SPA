/**
 * Created by Administrator on 2016/12/7.
 */
var AppDispatcher = require('../dispatcher/dispatcher');
function sendAccountData(data){
    var action={
        type:'sendAccountData',
        data:data
    };
    AppDispatcher.dispatch(action);
}
module.exports=sendAccountData;