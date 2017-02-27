/**
 * Created by Administrator on 2016/11/20.
 */
var AppDispacther=require('../dispatcher/dispatcher');
var EventEmitter=require('events').EventEmitter;
var assign=require('object-assign');
var item;
function  set(data){
    "use strict";
    item=data;
}
var ItemStore=assign({},EventEmitter.prototype,{
    addChangelistener:function(callback){
        this.on('change',callback);
    },
    removeChangeListener:function(callback){
        this.on('change',callback);
    },
    emitChange:function(){
        "use strict";
        ItemStore.emit('change');
    },
    getItem:function(){
        "use strict";
        return item;
    }
});
function handleItemContent(action){
    "use strict";
    if(action.type==='openItemContent'){
        set(action.data);
        ItemStore.emitChange();
    }
}
ItemStore.dispatchToken=AppDispacther.register(handleItemContent);
module .exports=ItemStore;