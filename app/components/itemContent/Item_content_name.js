/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Item_content_name = React.createClass({
    render: function () {
        "use strict";
        return (
            <div className="item_content_name">
                <span className="glyphicon glyphicon-user"></span>
                <span className="name">{this.props.name1} </span>
                <span className="label label-success item_content_label">{this.props.labelState}</span>
            </div>
        )
    }

});
module.exports =Item_content_name;