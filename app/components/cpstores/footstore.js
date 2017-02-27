/**
 * Created by Administrator on 2016/11/20.
 */
var AppDispacther=require('../dispatcher/dispatcher');
var EventEmitter=require('events').EventEmitter;
var assign=require('object-assign');
var footstate=null;
var footstore=assign({},propTypes, {
    addFootChangeListener:function(callback){
        "use strict";
        this.on('fontchange',callback);
    },
    removeFootChangeListener:function(callback){
        "use strict";
        this.on('change',callback);
    },
    emitFonoChange:function(){
        "use strict";
        footstore.emit('fontchange');
    },
    getFootState: function () {
        return fontstate;
    },
    setFootState:function(newstate){
        "use strict";
        footstate=newstate;
    }
});
function handleFootAction(action){
    "use strict";
    if(action==='footchange'){
        footstore.setFootState=action.state
    }
}
AppDispacther.register(handleFootAction);
module .exports=footstore;