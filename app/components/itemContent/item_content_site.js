/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');

var Item_content_site = React.createClass({

    render: function () {
        "use strict";
        return (
            <div className="item_content_site">
                <span className="glyphicon glyphicon-map-marker item_content_siteSpan"></span>
                <span className="text">活动地点</span>
                <span className="site">{this.props.site}</span>
            </div>
        )
    }

});
module.exports =Item_content_site;