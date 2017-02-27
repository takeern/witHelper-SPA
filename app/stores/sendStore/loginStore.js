/**
 * Created by Administrator on 2016/11/20.
 */
var AppDispacther = require('../../dispatcher/dispatcher');
var formStore=require('./formStore');
var loginStore=formStore();
var login=require('../../getData/login');
var register=require('../../getData/register');
var user,psw,phone,rep;
loginStore.set=function(data,name){
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
loginStore.getRep=function(){
    "use strict";
    return rep;
};

loginStore.login=function(){
    "use strict";
    if(user&&psw){
        login(user,psw);
    }
};
loginStore.registe=function(){
    "use strict";
    if(user&&psw&&phone){
        console.log('registe');
        register(user,psw,phone);
    }
};
function handleSendLoginData(action) {
    "use strict";
    if (action.type === 'sendLoginInfoData') {
        rep=action.data;
        console.log('rep'+rep);
        loginStore.emitChange();
    }
}
function handleSendRegisterData(action) {
    "use strict";
    if (action.type === 'sendRegisterInfoData') {
        rep=action.data;
        loginStore.emitChange();
    }
}
loginStore.dispatchToken = AppDispacther.register(handleSendLoginData);
loginStore.dispatchToken = AppDispacther.register(handleSendRegisterData);
module.exports = loginStore;