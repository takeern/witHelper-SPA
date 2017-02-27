/**
 * Created by Administrator on 2017/2/17.
 */
var reqwest=require('reqwest');
require('xhr2');
var sendLoginInfo=require('../actions/sendLoginInfo');
var React=require('react');
var Login_wrapper=require('../components/login/login_wrapper');
var ReactDOM=require('react-dom');
var xhxmStore=require('../stores/sendStore/xhxmStore');
function sendState(){
    "use strict";
    reqwest({
        url: '/getState'
        , method: 'post'
        , contentType:'text/html'
        , success: function (resp) {
            var data=JSON.parse(resp.response);
            if(data.login==='fail'){
                ReactDOM.render(<Login_wrapper/>,document.getElementById('itemContent'));
            }
            if(data.lesson==='success'){
                xhxmStore.set(data.lesson,'state');
            }
        }
    })
}
module .exports=sendState;