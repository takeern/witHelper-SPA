/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Header_nav_hr=require('./header_nav_hr');
var containerRender=require('../containerRender.js');
var Header_nav_li=React.createClass({
    handleClick:function() {
        "use strict";
        var newpage=this.props.id;
        containerRender(this.props.text);
        this.props.back_onclick(newpage);//回调将当期被点击的子组件发送到福组件，并将该子组件名称保存到state中
    },
    shouldComponentUpdate:function(nextProps, nextState){//两次比较第一次选出当前被点击子组件渲染，第二次选出上次被点击子组件渲染  (渲染改变class)
        "use strict";
        var go=false;
        if(this.props.id==nextProps.nowPage){//改变上次被点击状态
            go=true;
        }
        if(this.props.id==this.props.nowPage){//改变本次点击状态
            go=true;
        }
        return go;
    },
    render:function(){
        "use strict";
        var check=false;//子健判断当前组件是否被选
        if(this.props.nowPage==this.props.id){//如果当前页面等于保存在福组件中的page代表被选
            check=true;
        }
        return(
            <li className={this.props.class}  onClick={this.handleClick}>
                {this.props.text}
                <Header_nav_hr check={check}/>
            </li>
        )
    }
});
module .exports=Header_nav_li;