/**
 * Created by Administrator on 2016/12/7.
 */
var AppDispatcher = require('../dispatcher/dispatcher');
function SumbitInfoForm(){
    var action={
        type:'sumbitInfoForm'
    };
    AppDispatcher.dispatch(action);
}
module.exports={
    SumbitInfoForm:SumbitInfoForm
};