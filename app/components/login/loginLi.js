/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');

var LoginLi = React.createClass({
    handleClick:function(){
        "use strict";
        var data=this.props.name;
        this.props.handleChildClick(data);
    },
    render: function () {
        "use strict";
        if(this.props.state===this.props.name){
            var str='be_choose';
        }
        return (
            <li className={str} onClick={this.handleClick}>
                {this.props.name}
                <hr />
            </li>
        )
    }

});
module.exports =LoginLi;