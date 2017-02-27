/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Item_content_title=require('./item_content_title');
var Item_content_starttime=require("./item_content_starttime");
var Item_content_finishtime=require('./item_content_finishtime');
var Item_content_site=require('./item_content_site');
var Item_content_organizer=require('./item_content_organizer');
var Item_content_ticket=require('./item_content_ticket');
var Item_content_des=require('./item_content_des');
var Item_content = React.createClass({
    render: function () {
        "use strict";
        return (
            <div className="item_content">
                <Item_content_title title={this.props.title}/>
                <Item_content_starttime startTime={this.props.startTime} />
                <Item_content_finishtime finishTime={this.props.finishTime} />
                <Item_content_site site={this.props.site} />
                <Item_content_organizer organizer={this.props.organizer} />
                <Item_content_ticket ticket={this.props.ticket} />
                <Item_content_des des={this.props.des} />
            </div>
        )
    }
});
module.exports =Item_content;