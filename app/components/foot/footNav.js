/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var ReactDOM=require('react-dom');
var FootLi=require('./footLi');
var readyRender=require('../readyRender');
var FootNav=React.createClass({
    getInitialState:function()
    {
        "use strict";
        return{//初始状态,可更改后面可通过客户历史选择初始页面
            page:this.props.statePage
        }
    },
    handleClickChange:function(newspage){//将子组件中被选信息传送给上来，newpage代表当前被点击page
        "use strict";
        readyRender(newspage);
        this.setState({
            page:newspage
        })
    },
    render:function(){
        "use strict";
        var value1={
            text:"活动",
            initialclass:'glyphicon-home'
        };
        var value2={
            text:"课程",
            initialclass:'glyphicon-th'
        };
        var value3={
            text:"分享",
            initialclass:'glyphicon-transfer'
        };
        var value4={
            text:"个人",
            initialclass:'glyphicon-user'
        };
        return(
                <ul className="row"  >
                    <FootLi {...value1} nowPage={this.state.page} back_onclick={this.handleClickChange}/>
                    <FootLi {...value2} nowPage={this.state.page} back_onclick={this.handleClickChange}/>
                    <FootLi {...value3} nowPage={this.state.page} back_onclick={this.handleClickChange}/>
                    <FootLi {...value4} nowPage={this.state.page} back_onclick={this.handleClickChange}/>
                </ul>
        );
    }
});
module .exports=FootNav;
