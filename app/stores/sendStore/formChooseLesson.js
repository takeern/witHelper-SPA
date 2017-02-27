/**
 * Created by Administrator on 2017/1/4.
 */
var EventEmitter = require('events').EventEmitter;
var chooseLessonStore=require('../chooseLessonStore');
var formStore=require('./formStore');
var assign = require('object-assign');
var lessonId=[];
var ChooseLessonStoreForm=formStore();
ChooseLessonStoreForm.set=function(data){
    "use strict";
    for (var i=0;i<lessonId.length;i++){
        if(lessonId[i]===data){
            lessonId.splice(i,1);
            return;
        }
    }
    lessonId.push(data);
};
ChooseLessonStoreForm.sendData=function(){
    "use strict";
    console.log('send');
    var viewState=chooseLessonStore.getdata().viewState;
    var str=chooseLessonStore.getdata().str;
    console.log(viewState+str);
    //sendform
};
module.exports = ChooseLessonStoreForm;