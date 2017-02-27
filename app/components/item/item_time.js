/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Item_time = React.createClass({
    render: function () {
        "use strict";
        return (
            <div className="pub_time">
                <span className="glyphicon glyphicon-time "></span>
                活动时间
                <span className="span1">{this.props.time}</span>
            </div>
        );
    }
});
module.exports =Item_time;