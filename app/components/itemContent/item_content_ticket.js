/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');

var Item_content_ticket = React.createClass({

    render: function () {
        "use strict";
        return (
            <div className="item_content_ticket">
                <span className="title_underline">
                活动票种
                <hr className="hr1" />
               </span>
                <div>
                    <span className="glyphicon glyphicon-usd ticket_span">
                    </span>
                    {this.props.ticket}
                </div>
            </div>
        )
    }

});
module.exports =Item_content_ticket;