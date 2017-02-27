var React = require('react');
var ReactDOM = require('react-dom');
var Footli=require('./footnav');
var Container=require("./container");
/**
 * Created by Administrator on 2016/11/19.
 */
var sendFootState=require('../actions/fontaction');
var FootNav=React.createClass({
    getInitialState: function () {
       return{
           page:'2'
       };
    },
    handleClick:function(footState){
        "use strict";
        sendFootState.sendFontState(footState);
        console.log("发送foot");
      this.setState({
          page:footState
      });
    },
    render:function(){
        "use strict";
        var value1={
            pagename:"1",
            text:"主页"
        };
        var value2={
            pagename:"2",
            text:"个人信息"
        };
        return(
            <nav>
                <Footli {...value1} nowpage={this.props.page} callbackparent={this.handleClick}/>
                <Footli {...value2} callbackparent={this.handleClick}/>
            </nav>
        );
    }
});
ReactDOM.render(<FootNav />,document.getElementById("root"));
ReactDOM.render(<Container />,document.getElementById('container'));