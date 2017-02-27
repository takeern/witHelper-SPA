/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');

var Info_icon = React.createClass({

    render: function () {
        "use strict";
        var classstring="";
        if(this.props.check==false){
            classstring='glyphicon-remove';
        }
        if(this.props.check===true){
            classstring="glyphicon-ok"
        }
        return (
            <span className={"glyphicon form-control-feedback "+classstring} />
        )
    }

});
module.exports =Info_icon;