/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Item_mes_name = React.createClass({
    render: function () {
        "use strict";
        return (
            <span className="pub_name">{this.props.name}</span>
        );
    }
});
module .exports=Item_mes_name;