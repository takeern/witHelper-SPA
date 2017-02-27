/**
 * Created by Administrator on 2016/11/20.
 */
var AppDispacther=require('../dispatcher/dispatcher');
var EventEmitter=require('events').EventEmitter;
var assign=require('object-assign');
var footstate;
var footstore=assign({},EventEmitter.prototype,{
    addChangelistener:function(callback){
        this.on('change',callback);
    },
    removeChangeListener:function(callback){
        this.on('change',callback);
    },
    setName:function(data){
        "use strict";
        footstate=data;
    },
    emitChange:function(){
        "use strict";
        footstore.emit('change');
    },
    getState:function(){
        "use strict";
        return footstate;
    }
});
function handleFootAction(action){
    "use strict";
    console.log('getdao');
    if(action.type==='foot_change'){
        console.log("get到action");
        emitFootChange();
        setFootState(action.data);
    }
}
footstore.dispatchToken=AppDispacther.register(handleFootAction);
module .exports=footstore;