/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var Header_nav_ul= require('./header_nav_ul');
var Header_top=require('./header_top');
var Header=React.createClass({
    render:function(){
        "use strict";
            return(//向子健传递data
                <div className="header_wrapper">
                    <Header_top topSpanData={this.props.topSpanData} topTitle={this.props.topTitle}/>
                    <Header_nav_ul headerNavLIData={this.props.headerNavLIData} page="1"/>
                </div>
            )
    }
});
function set_header(header){
    "use strict";
    ReactDOM.render(<Header topSpanData={header.topSpanData} topTitle={header.topTitle} headerNavLIData={header.headerNavLIData} />,document.getElementById('header') )
}
module .exports=set_header;