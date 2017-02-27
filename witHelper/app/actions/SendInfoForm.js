/**
 * Created by Administrator on 2016/12/7.
 */
var AppDispatcher = require('../dispatcher/dispatcher');
function SendInfoForm(data,name){
    "use strict";
    console.log('send info form 0');
    var action={
        type:'sendInfoForm',
        data:data,
        name:name
    };
    AppDispatcher.dispatch(action);
}
module.exports={
    SendInfoForm:SendInfoForm
};