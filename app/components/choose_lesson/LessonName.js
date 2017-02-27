/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var LessonName = React.createClass({
    render: function () {
        "use strict";
        return (
            <span className="lesson_name">{this.props.lessonName}</span>
        )
    }

});
module.exports =LessonName;