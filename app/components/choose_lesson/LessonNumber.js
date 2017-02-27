/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var LessonNumber = React.createClass({
    render: function () {
        "use strict";
        return (
            <span className="lesson_number">{this.props.lessonNumber}</span>
        )
    }
});
module.exports =LessonNumber;