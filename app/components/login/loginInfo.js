/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var loginStore=require('../../stores/sendStore/loginStore');
var LoginInfo = React.createClass({
    getInitialState:function(){
        "use strict";
        return({
            data:""
        })
    },
    _onChange:function(){
        "use strict";
        var data=loginStore.getRep();
        var text;
        if(data==='defeat'){
            text='账号密码错误';
            if(this.isMounted()){
                this.setState({
                    data:text
                });
            }
        }
        if(data==='fail') {
            text='请正确填写表单';
            if(this.isMounted()){
                this.setState({
                    data:text
                });
            }
        }
        if(data==='repeat'){
            text='该账户已存在';
            if(this.isMounted()){
                this.setState({
                    data:text
                });
            }
        }
        if(data==='success'){
            this.props.handleInfoClick(data);
        }
    },
    componentDidMount: function() {
        loginStore.addChangelistener(this._onChange);
    },
    componentWillUnmount: function() {
        loginStore.removeChangeListener(this._onChange);
    },
    render: function () {
        "use strict";
        return (
            <div className="loginInfo">{this.state.data}</div>
        )
    }

});
module.exports =LoginInfo;