/**
 * Created by Administrator on 2016/11/20.
 */
var AppDispacther = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var lessonData;
var LessonStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on('change', callback);
    },
    removeChangeListener: function (callback) {
        this.on('change', callback);
    },
    set: function (data) {
        "use strict";
        lessonData=data;
    },
    emitChange: function () {
        "use strict";
        LessonStore.emit('change');
    },
    getLesson: function () {
        "use strict";
        return lessonData;
    }
});
function handleSendLessonData(action) {
    "use strict";
    if (action.type === 'sendLessonData') {
        LessonStore.set(action.data);
        LessonStore.emitChange();
    }
}
LessonStore.dispatchToken = AppDispacther.register(handleSendLessonData);
module.exports = LessonStore;