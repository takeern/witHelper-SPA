/**
 * Created by Administrator on 2016/11/20.
 */
var AppDispacther = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var fluxStore=require('./fluxStore');
var setInfoForm=require('../getData/setInfoForm');
var title,startTime,finishTime,site,organizer,ticket,des;
var infoFormStore = assign({}, EventEmitter.prototype, {
    addChangelistener: function (callback) {
        this.on('change', callback);
    },
    removeChangeListener: function (callback) {
        this.on('change', callback);
    },
    set: function (data) {
        "use strict";
    },
    emitChange: function () {
        "use strict";
        console.log('chufa');
        infoFormStore.emit('change');
    },
    getName1: function () {
        "use strict";
        return null;
    },
    check:function(){
        "use strict";
        if (title && startTime && finishTime && organizer && des && ticket) {
            return true;
        } else {
            return false;
        }
        //检测每项数据的正确性 成功就调用函数执行提交
    }
});
function handleInfoFormAction(action) {
    "use strict";
    if (action.type === 'sendInfoForm') {
        switch (action.name){
            case 'item_title':
                title=action.data;
                break;
            case 'item_begintime':
                startTime=action.data;
                break;
            case 'item_finishtime':
                finishTime=action.data;
                break;
            case 'item_site':
                site=action.data;
                break;
            case 'item_organizer':
                organizer=action.data;
                break;
            case 'item_des':
                des=action.data;
                break;
            case 'item_ticket':
                ticket=action.data;
                break;
            default:
                console.log('sendInfoForm nothing');
                console.log(action.name);
                break;
        }
    }
    if(action.type==="sumbitInfoForm"){
        if(infoFormStore.check()){
            setInfoForm(title,startTime,finishTime,site,organizer,ticket,des);
        }
        else {
            alert('请输入正确表单！');
        }
    }
}
infoFormStore.dispatchToken = AppDispacther.register(handleInfoFormAction);
module.exports = infoFormStore;