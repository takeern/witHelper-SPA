/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var loginStore=require('../../stores/sendStore/loginStore.js');
var LoginInput= React.createClass({
    getInitialState:function(){
        "use strict";
        return{
            value:null
        }
    },
    handleBlur:function(e){
        "use strict";
        loginStore.set(e.target.value,this.props.name);
    },
    handleChange:function(e){
        "use strict";
        var val=e.target.value;
        this.setState({
            value:val
        })
    },
    render: function () {
        "use strict";
        return (
            <input type="text"  className="form-control input-sm chat-input"  value={this.state.val} placeholder={this.props.name} onChange={this.handleChange} onBlur={this.handleBlur}/>
        )
    }

});
module.exports =LoginInput;