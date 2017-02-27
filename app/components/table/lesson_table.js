/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Lesson_tbody=require('./Lesson_tbody');
var Lesson_thead=require('./Lesson_thead');
var Lesson_table = React.createClass({

    render: function () {
        "use strict";
        return (
            <table className="lesson_table">
                <Lesson_thead />
                <Lesson_tbody content={this.props.data}/>
            </table>
        )
    }
});
module.exports =Lesson_table;