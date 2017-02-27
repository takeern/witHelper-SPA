/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Item_content_control=require('./Item_content_control');
var Item_content_name=require('./Item_content_name');
var Item_content_foot = React.createClass({
    closeItem:function(newstate){
        "use strict";
        this.props.closeItem(newstate)
    },
    render: function () {
        "use strict";
        return (
            <div className="itme_content_foot">
                <Item_content_name name1={this.props.name1} labelState={this.props.labelState} />
                <Item_content_control closeItem={this.props.closeItem}/>
            </div>
        )
    }
});
module.exports =Item_content_foot;