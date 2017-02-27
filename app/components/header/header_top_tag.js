/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Header_top_tag_span=require("./header_top_tag_span");
var Header_top_tag=React.createClass({
    render:function(){
        "use strict";
        var items=this.props.topSpanData.map(function(item){
            return(
                <Header_top_tag_span {...item} key={item.id} />
            );
        });
        return(
            <div className="col-xs-4 tag_wrapper">
                {items}
            </div>
        );
    }
});
module .exports=Header_top_tag;