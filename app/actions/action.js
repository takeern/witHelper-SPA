/**
 * Created by Administrator on 2016/11/20.
 */
var AppDispatcher=require('../dispatcher/dispatcher');
function getdata(data){
    var action={
        type:'send_name',
        data:data
    };
    AppDispatcher.dispatch(action);
}
module.exports={
    getdata:getdata
};