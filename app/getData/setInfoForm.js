/**
 * Created by Administrator on 2017/2/4.
 */
var reqwest=require('reqwest');
require('xhr2');
function setInfoForm(title,startTime,finishTime,site,organizer,ticket,des){
    "use strict";
    console.log(title+startTime+finishTime+site+organizer+ticket+des);
    reqwest({
        url: '/setInfoForm'
        , method: 'get'
        , contentType:'text/html'
        , data: { title:title,startTime:startTime,finishTime:finishTime,site:site,organizer:organizer,ticket:ticket,des:des}
        , success: function (resp) {
            var data=JSON.parse(resp.response);
            console.log(data.setInfoForm);
            if(data.setInfoForm==='success'){
                alert('提交成功');
            }
        }
    })
}
module .exports=setInfoForm;