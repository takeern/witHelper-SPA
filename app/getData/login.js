/**
 * Created by Administrator on 2017/1/28.
 */
var reqwest=require('reqwest');
require('xhr2');
var sendLoginInfo=require('../actions/sendLoginInfo');
function login(user,pas){
    "use strict";
    reqwest({
        url: '/login'
        , method: 'post'
        , data: { user: user, pas: pas }
        , success: function (resp) {
            var data=JSON.parse(resp.response);
            sendLoginInfo(data.login);
        }
    })
}
module .exports=login;