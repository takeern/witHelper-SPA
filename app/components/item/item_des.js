/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Item_des = React.createClass({
    getDefaultProps:function(){
        "use strict";
        return{
            des:"详情请去现场(逃~"
        }
    },
    render: function () {
        "use strict";
        return (
            <div className="pub_des">{this.props.des}</div>
        )
    }
});
module.exports =Item_des;