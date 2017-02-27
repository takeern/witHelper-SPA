/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');

var Item_content_des = React.createClass({

    render: function () {
        "use strict";
        return (
            <div className="item_content_des">
                <span className="title_underline">
                附加描述
                <hr className="hr1" />
                </span>
                <div className="des_content">
                    {this.props.des}
                </div>
            </div>
        )
    }

});
module.exports =Item_content_des;