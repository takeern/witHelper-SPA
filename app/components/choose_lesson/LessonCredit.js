/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');

var LessonCredit = React.createClass({
    render: function () {
        "use strict";
        return (
            <span className="lesson_credit">{this.props.lessonCredit}</span>
        )
    }
});
module.exports =LessonCredit;