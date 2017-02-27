/**
 * Created by Administrator on 2017/1/29.
 */
var reqwest=require('reqwest');
require('xhr2');
var sendRegisterInfo=require('../actions/sendRegisterInfo');
function register(user,pas,phone){
    "use strict";
    reqwest({
        url: '/register'
        , contentType:'text/html'
        , method: 'post'
        , data: { user: user, pas: pas,phone:phone }
        , success: function (resp) {
            var data=JSON.parse(resp.response);
            sendRegisterInfo(data.register);
        }
    })
}
module .exports=register;