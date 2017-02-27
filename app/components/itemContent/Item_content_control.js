/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');

var Item_content_control = React.createClass({
    handleClick:function(){
        "use strict";
        var newstate='close';
        this.props.closeItem(newstate);
    },
    render: function () {
        "use strict";
        return (
            <div className="item_content_control" onClick={this.handleClick}>╳</div>
        )
    }
});
module.exports =Item_content_control;