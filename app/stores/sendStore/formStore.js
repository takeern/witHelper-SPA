/**
 * Created by Administrator on 2017/1/12.
 */
var EventEmitter=require('events').EventEmitter;
var assign=require('object-assign');
var formStore=function(){
    "use strict";
    var Data;
    var store=assign({},EventEmitter.prototype,{
        addChangelistener:function(callback){
            this.on('change',callback);
        },
        removeChangeListener:function(callback){
            this.on('change',callback);
        },

        emitChange:function(){
            "use strict";
            console.log('chufa');
            store.emit('change');
        }
    });
    return store;
};
module .exports=formStore;