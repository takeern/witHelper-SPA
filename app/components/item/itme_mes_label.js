/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Items_mes_label = React.createClass({
    render: function () {
        "use strict";
        var classstring='label';
        var text='认证';
        if(this.props.labelState){
            classstring+='success';
        }
        else {
            classstring+='danger';
            text='未认证';
        }
        return (
            <span className={"label "+classstring}>{text}</span>
        );
    }
});
module .exports=Items_mes_label;