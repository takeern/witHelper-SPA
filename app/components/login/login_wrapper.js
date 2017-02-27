/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var ReactDOM=require('react-dom');
var FormLogin=require('./formLogin');
var FormRegister=require('./formRegister');
var LoginInfo=require('./loginInfo');
var LoginLi=require('./loginLi');
var Login_wrapper = React.createClass({
    getInitialState:function(){
        "use strict";
        return({
            state:'登录'
        })
    },
    handleOnClick:function(data){
        "use strict";
        if(this.isMounted()){
            this.setState({
                state:data
            })
        }
    },
    handleChildClick:function(data){
        "use strict";
        if(this.isMounted()){
            this.setState({
                change:data
            })
        }
    },
    render: function () {
        "use strict";
        if(this.state.change==='success'){
            return (
                null
            )
        }
        return (
            <div className="login">
                <div className="login_wrapper">
                    <div className="login_header">
                        <ul className="login_ul">
                            <LoginLi name='登录' state={this.state.state} handleChildClick={this.handleOnClick} key='1'/>
                            <LoginLi name="注册" state={this.state.state} handleChildClick={this.handleOnClick} key="2"/>
                        </ul>
                        <hr className="login_hr" />
                    </div>
                    <FormLogin state={this.state.state}/>
                    <FormRegister state={this.state.state}/>
                    <LoginInfo handleInfoClick={this.handleChildClick}/>
                </div>
            </div>
        )
    }
});

module.exports =Login_wrapper;