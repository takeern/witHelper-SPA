/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');

var LessonSite = React.createClass({
    render: function () {
        "use strict";
        return (
            <span className="lesson_site">{this.props.lessonSite}</span>
        )
    }

});
module.exports =LessonSite;