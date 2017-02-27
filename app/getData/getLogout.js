/**
 * Created by Administrator on 2017/2/18.
 */
var reqwest=require('reqwest');
var Login=require('../components/login/login_wrapper');
var React=require('react');
var ReactDOM=require('react-dom');
require('xhr2');
function getLogout(){
    "use strict";
    reqwest({
        url: '/getLogout'
        , method: 'get'
        , contentType:'text/html'
        , success: function (resp) {
            var data=JSON.parse(resp.response);
            if(data.state==='success'){
                ReactDOM.render(<Login/>,document.getElementById('itemContent'));
            }
        }
    });
}
module .exports=getLogout;