/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var loginStore=require('../../stores/sendStore/loginStore.js');
var RegisterInput=require('./registerInput');
var FormRegister = React.createClass({
    handleSumbit:function(){
        "use strict";
        loginStore.registe();
    },
    render: function () {
        "use strict";
        if(this.props.state==='登录') {
            return (
                null
            );
        }
        return (
            <div className={"row form_register "}>
                <div className="form-login">
                    <RegisterInput name="用户名" />
                    <RegisterInput name="手机号" />
                    <RegisterInput name="密码" />
                    <div className="wrapper">
                    <span className="group-btn" onClick={this.handleSumbit}>
                        <a href="#" className="btn btn-primary btn-md">注册 </a>
                    </span>
                    </div>
                </div>
            </div>
        )
    }

});
module.exports =FormRegister;