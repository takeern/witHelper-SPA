/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');

var Item_content_finishtime = React.createClass({

    render: function () {
        "use strict";
        return (
            <div className="item_content_finishTime">
                <span className="glyphicon glyphicon-time item_content_timeSpan"></span>
                <span className="text">截止日期</span>
                <span className="finishTime">{this.props.finishTime}</span>
            </div>
        )
    }

});
module.exports =Item_content_finishtime;