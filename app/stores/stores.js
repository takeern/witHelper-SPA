/**
 * Created by Administrator on 2016/11/20.
 */
var AppDispacther=require('../dispatcher/dispatcher');
var EventEmitter=require('events').EventEmitter;
var assign=require('object-assign');
var name='tq';
var NameStore=assign({},EventEmitter.prototype,{
    addChangelistener:function(callback){
        this.on('change',callback);
    },
    removeChangeListener:function(callback){
        this.on('change',callback);
    },
    setName:function(data){
        "use strict";
        name=data;
        console.log(name);
    },
    emitChange:function(){
        "use strict";
        console.log('chufa');
        NameStore.emit('change');
    },
    getName1:function(){
        "use strict";
        return name;
    }
});
function handleAction(action){
    "use strict";
    if(action.type==='send_name'){

        console.log('stores');
        NameStore.setName(action.data);
        NameStore.emitChange();
    }
}
NameStore.dispatchToken=AppDispacther.register(handleAction);
module .exports=NameStore;
