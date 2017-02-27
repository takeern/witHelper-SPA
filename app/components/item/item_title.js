/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');

var Item_title = React.createClass({
    render: function () {
        "use strict";
        return (
            <p className="pub_title">{this.props.title}</p>
        );
    }
});
module .exports=Item_title;