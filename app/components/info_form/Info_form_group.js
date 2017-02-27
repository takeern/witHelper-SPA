/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Info_input=require('./Info_input');
var Info_icon=require('./Info_icon');
var Info_form_group = React.createClass({
    getInitialState:function(){
        "use strict";
        return{
            check:'begin'
        }
    },
    handleChildChange:function(check){
        "use strict";
      this.setState({
          check:check
      })
    },
    render:function(){
        "use strict";
        return(
            <div className="form-group  has-feedback">
                <label className="control-label" htmlFor={this.props.name}>{this.props.labelText}</label>
                <Info_input backParent={this.handleChildChange} name={this.props.name} placeholder={this.props.placeholder} />
                <Info_icon check={this.state.check}/>
            </div>
        )
    }

});
module.exports =Info_form_group;