/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');

var Item_site = React.createClass({
    render: function () {
        "use strict";
        return (
            <div className="pub_site">
                <span className="glyphicon glyphicon-map-marker"/>
                活动地点
                <span className="span1">{this.props.site}</span>
            </div>
        )
    }

});
module.exports =Item_site;