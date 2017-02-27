/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Item_content_title = React.createClass({
    render: function () {
        "use strict";
        return (
            <div className="item_content_title">{this.props.title}</div>
        )
    }
});
module.exports =Item_content_title;