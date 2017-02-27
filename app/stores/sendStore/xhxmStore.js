/**
 * Created by Administrator on 2016/11/20.
 */
var getLesson=require('../../getData/getLesson');
var formStore=require('./formStore');
var lessonLoginStore=formStore();
var xh,mm,state;
lessonLoginStore.set=function(data,name){
    "use strict";
    if(name==='学号'){
        xh=data;
        console.log(data);
    }
    if(name==="密码"){
        mm=data;
        console.log(data);
    }
    if(name==='state'){
        state=data;
    }
};
lessonLoginStore.getState=function(){
    "use strict";
  return state;
};
lessonLoginStore.getxh= function () {
    "use strict";
    return xh;
};
lessonLoginStore.getmm=function(){
    "use strict";
    return mm;
};
lessonLoginStore.next=function(){
    "use strict";
    if(xh&&mm){
        getLesson(xh,mm);
    }
};

module .exports=lessonLoginStore;