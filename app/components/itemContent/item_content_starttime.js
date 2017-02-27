/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');

var Item_content_starttime = React.createClass({

    render: function () {
        "use strict";
        return (
            <div className="item_content_startTime">
                <span className="glyphicon glyphicon-time item_content_timeSpan"></span>
                <span className="text">活动时间</span>
                <span className="startTime">{this.props.startTime}</span>
            </div>
        )
    }

});
module.exports =Item_content_starttime;