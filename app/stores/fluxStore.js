/**
 * Created by Administrator on 2017/1/12.
 */
var AppDispacther = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var fluxStore=function(spec){
    "use strict";
    var Data;
    var store=assign({}, EventEmitter.prototype, {
        addChangeListener: function (callback) {
            this.on('change', callback);
        },
        removeChangeListener: function (callback) {
            this.on('change', callback);
        },
        set: function (data) {
            "use strict";
            Data=data;
        },
        emitChange: function () {
            "use strict";
            store.emit('change');
        },
        get: function () {
            "use strict";
            return Data;
        }
    });
    if(!spec.action){
        if(spec.actionType){
            var handleAction=function(action){
                "use strict";
                if(action.type===spec.actionType){
                    store.set(action.data);
                    store.emitChange();
                }
            };
        }
        else{
            console.log('you dont set actionType');
        }
    }
    else{
        var handleAction=spec.action;
    }
    store.dispatchToken=AppDispacther.register(handleAction);
    return store;
};
module .exports=fluxStore;