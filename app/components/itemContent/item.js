/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Item_mes=require('./item_mes');
var Item_title=require('./item_title');
var Item_des=require('./item_des');
var Item_site=require("./item_site");
var Item_time=require("./item_time");
var Item = React.createClass({
    render: function () {
        "use strict";
        return(
            <section className="item">
                <Item_mes  name={this.props.name} labelState={this.props.labelState}/>
                <Item_title title={this.props.title}/>
                <Item_des des={this.props.des}/>
                <Item_site site={this.props.site}/>
                <Item_time time={this.props.time}/>
            </section>
        )
    }
});
module .exports=Item;