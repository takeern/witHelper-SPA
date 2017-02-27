/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Item_mes_name=require('./itme_mes_name');
var Item_mes_label=require('./itme_mes_label');
var Item_mes = React.createClass({
    render: function () {
        "use strict";
        return (
            <div className="pub_mes" >
                <Item_mes_name name={this.props.name}/>
                <Item_mes_label labelState={this.props.labelState}/>
            </div>
        );
    }
});
module .exports=Item_mes;