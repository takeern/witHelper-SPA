/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');

var Item_content_organizer = React.createClass({

    render: function () {
        "use strict";
        return (
            <div className="item_content_organizer">
                <span className="title_underline">
                举办方
                <hr className="hr1" />
                </span>
                <p>{this.props.organizer}</p>
            </div>
        )
    }

});
module.exports =Item_content_organizer;