/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var FootLi=React.createClass({
    handleClick:function() {
        "use strict";
        var newpage=this.props.text;
        this.props.back_onclick(newpage);//回调将当期被点击的子组件发送到福组件，并将该子组件名称保存到state中
    },
    shouldComponentUpdate:function(nextProps, nextState){//两次比较第一次选出当前被点击子组件渲染，第二次选出上次被点击子组件渲染  (渲染改变class)
        "use strict";
       var go=false;
        if(this.props.text==nextProps.nowPage){
            go=true;
        }
        if(this.props.text==this.props.nowPage){
            go=true;
        }
        return go;
    },
    render:function(){
        "use strict";
        var classString="";
        if(this.props.text===this.props.nowPage){//判断是否是被点击的子组件，标记已被存储在福组件的state中
            classString="choose";
        }
        return(
            <li  className={"col-xs-3 footInitialState "+classString} onClick={this.handleClick}>
                <span  className={"foot_icon glyphicon "+this.props.initialclass}/>
                <p className="foot_p ">{this.props.text}</p>
            </li>
        );
    }
});
module .exports=FootLi;