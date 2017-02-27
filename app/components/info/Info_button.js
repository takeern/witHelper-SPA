/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var SumbitInfoForm=require('../actions/SumbitInfoForm.js');
var Info_button = React.createClass({
    handleClick:function(){
        "use strict";
        SumbitInfoForm.SumbitInfoForm();
    },
    render: function () {
        "use strict";
        return (
            <button type="button" className="btn btn-success" onClick={this.handleClick}>OK let's go</button>
        )
    }
});
module.exports =Info_button;