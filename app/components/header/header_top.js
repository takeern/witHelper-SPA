/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Header_top_title=require('./header_top_title');
var Header_top_tag=require('./header_top_tag');
var Header_top=React.createClass({
    render:function(){
        "use strict";

        return(
            <div className="row header_top" >
                <Header_top_title topTitle={this.props.topTitle}/>
                <Header_top_tag topSpanData={this.props.topSpanData} />
            </div>
        )
    }
});
module .exports=Header_top;