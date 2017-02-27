/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');

var Lesson_thead_th = React.createClass({

    render: function () {
        "use strict";
        return (
            <th>{this.props.text}</th>
        )
    }

});
module.exports =Lesson_thead_th;