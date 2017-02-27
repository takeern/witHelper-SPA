/**
 * Created by Administrator on 2016/12/7.
 */
var reqwest=require('reqwest');
require('xhr2');
var sendInfoData=require('../../actions/sendInfoData');
function getInfoData(){
    "use strict";
    reqwest({
        url: '/getActive'
        , method: 'get'
        , success: function (resp) {
            var data=JSON.parse(resp.response);
            sendInfoData(data.active);
        }
    })
}
module .exports=getInfoData;