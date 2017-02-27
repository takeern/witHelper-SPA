/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var LoginInput=require('./loginInput');
var loginStore=require('../../stores/sendStore/loginStore.js');
var FormLogin = React.createClass({
    handleSumbit:function(){
        "use strict";
        loginStore.login();
    },
    render: function () {
        "use strict";
        if(this.props.state==='注册'){
            return (
                null
            )
        }
        return (
            <div className={"row form_login"}>
                <div className="form-login">
                    <LoginInput name="用户名" />
                    <LoginInput name="密码" />
                    <div className="wrapper">
                    <span className="group-btn" onClick={this.handleSumbit}>
                        <a href="#" className="btn btn-primary btn-md">登录 </a>
                    </span>
                    </div>
                </div>
            </div>
        )
    }

});
module.exports =FormLogin;