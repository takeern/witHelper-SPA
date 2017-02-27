/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Header_nav_hr=React.createClass({
    render:function(){
        "use strict";
        var classstring="";
        if(this.props.check==true){
            classstring='header_hr_choose';
        }
        return(
            <hr className={classstring}/>
        );
    }
});
module .exports=Header_nav_hr;