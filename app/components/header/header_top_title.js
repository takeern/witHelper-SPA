/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Header_top_title=React.createClass({
    render:function(){
        "use strict";
        return(
            <div className="header_title col-xs-4 col-xs-offset-4 ">
                {this.props.topTitle}
            </div>
        );
    }
});
module.exports=Header_top_title;
