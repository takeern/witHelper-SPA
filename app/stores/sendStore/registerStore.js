/**
 * Created by Administrator on 2016/11/20.
 */
var formStore=require('./formStore');
var registerStore=formStore();
var user,psw,phone;
registerStore.set=function(data,name){
    "use strict";
    if(name==='用户名'){
        user=data;
        console.log(data);
    }
    if(name==="密码"){
        psw=data;
        console.log(data);
    }
    if(name==="手机号"){
        phone=data;
        console.log(data);
    }
};
registerStore.next=function(){
    "use strict";
    if(user&&psw&&phone){
        console.log('register'+"register");
    }
};
module.exports = registerStore;