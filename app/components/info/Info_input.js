/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var SendInfoForm=require('../actions/SendInfoForm.js');
var Info_input = React.createClass({
    getInitialState:function(){
        "use strict";
        return{
            value:null
        }
    },
    handleBlur:function(e){
        "use strict";
        SendInfoForm.SendInfoForm(e.target.value,e.target.name);
    },
    handleChange:function(e){
        "use strict";
        var val=e.target.value;
        var check=false;
        if(val){
            check=true;
        }
        this.props.backParent(check);
        this.setState({
            value:val
        })
    },
    render: function () {
        "use strict";
        return (
            <input className="form-control" id={this.props.name} name={this.props.name} placeholder={this.props.placeholder}  type="text" value={this.state.val} onChange={this.handleChange} onBlur={this.handleBlur}/>
        )
    }
});
module.exports =Info_input;