/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Header_nav_li=require("./header_nav_li");
var Header_nav_ul=React.createClass({
    getInitialState:function(){
        "use strict";
      return{
          page:this.props.page
      }
    },
    handleOnclickChange:function(newpage){
        "use strict";
        if(this.isMounted()){
            this.setState({
                page:newpage
            })
        }
    },
    render:function(){
        var nowPage=this.state.page;
        var handle=this.handleOnclickChange;
        var items=this.props.headerNavLIData.map(function(item){//批量生成li，该组件中的this无法使用
            return(
                <Header_nav_li key={item.id} {...item} nowPage={nowPage} back_onclick={handle} />
            );
        });
        return(
            <ul className="header_nav_ul row" >
                {items}
            </ul>
        );
    }
});
module.exports=Header_nav_ul;
