/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var ReactDOM=require('react-dom');
var BeStart=require('../beStart/beStart_wrapper');
var accountStore=require('../../stores/accountStore');
var sendAccount=require('../../actions/sendAccount');
var logout=require('../../getData/getLogout');
var Person_wrapeer = React.createClass({
    getInitialState:function(){
        "use strict";
        var data=accountStore.get();
        return({
            data:data
        })
    },
    handleOnclick:function(){
        "use strict";
        ReactDOM.render(<BeStart/>,document.getElementById('itemContent'));
    },
    handleLogout:function(){
        "use strict";
         logout();
    },
    _onChange:function(){
        "use strict";
        if(this.isMounted()){
            var data=accountStore.get();
            this.setState({
                data:data
            });
        }
    },
    componentDidMount: function() {
        accountStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        accountStore.removeChangeListener(this._onChange);
    },
    render: function () {
        "use strict";
        if(!this.state.data){
            var name='',bean='';
        }
        else{
            name=this.state.data.name;
            bean=this.state.data.bean;
        }
        return (
            <div className="person_wrapper">
                <div className="person_header">
                    <span className="glyphicon glyphicon-user" />
                    <span className="person_name">账户:</span>
                    <span>{name}</span>
                    <span className="glyphicon glyphicon-registration-mark"/>
                    <span>武功豆:</span>
                    <span>{bean}</span>
                </div>
                <div onClick={this.handleOnclick}><span className="glyphicon glyphicon-star"/><span>我的收藏</span><span className="glyphicon glyphicon-chevron-right"/></div>
                <div onClick={this.handleOnclick}><span className="glyphicon glyphicon-cloud"/><span>我的发布</span><span className="glyphicon glyphicon-chevron-right"/></div>
                <div onClick={this.handleOnclick}><span className="glyphicon glyphicon-edit"/><span>点击认证</span><span className="glyphicon glyphicon-chevron-right"/></div>
                <div onClick={this.handleOnclick}><span className="glyphicon glyphicon-tree-deciduous"/><span>关于我们</span><span className="glyphicon glyphicon-chevron-right"/></div>
                <button className="btn btn-danger person_logout" onClick={this.handleLogout}>退出登录</button>
            </div>
        )
    }
});
ReactDOM.render(<Person_wrapeer/>,document.getElementById('item_container'));
sendAccount();
module.exports =Person_wrapeer;