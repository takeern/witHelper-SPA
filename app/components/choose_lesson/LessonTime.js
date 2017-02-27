/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var LessonTime = React.createClass({

    render: function () {
        "use strict";
        return (
            <span className="lesson_time">{this.props.lessonTime}</span>
        )
    }

});
module.exports =LessonTime;