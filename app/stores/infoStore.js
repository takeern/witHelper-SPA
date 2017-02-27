/**
 * Created by Administrator on 2016/11/20.
 */
var AppDispacther = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var infoData,contentData="111";
function set(data){
    "use strict";
    "use strict";
    infoData=data;
}
function setInfoContentData(id){
    for(var i=0; i<infoData.length; i++) {
        if(infoData[i].contentData.id==id){
            contentData=infoData[i];
        }
    }
}
var infoStore = assign({}, EventEmitter.prototype, {
    addChangelistener: function (callback) {
        this.on('change', callback);
    },
    removeChangeListener: function (callback) {
        this.on('change', callback);
    },
    emitChange: function () {
        "use strict";
        infoStore.emit('change');
    },
    getItemData: function () {
        "use strict";
        return infoData;
    },
    getItemContentData:function(id){
        "use strict";
        return contentData;
    }
});
function handleInfoData(action) {
    "use strict";
    if (action.type === 'sendInfoData') {
       set(action.data);
        infoStore.emitChange();
    }
    if(action.type=="openInfoContent"){
        setInfoContentData(action.data);
        infoStore.emitChange();
    }
}
infoStore.dispatchToken = AppDispacther.register(handleInfoData);
module.exports = infoStore;