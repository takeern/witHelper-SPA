/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Lesson_tbody_td=require("./Lesson_tbody_td");
var Lesson_tbody_tr = React.createClass({
    render: function () {
        "use strict";
        var i=0;
        var m=this.props.content;
        var node=this.props.node;
        var items=m.map(function(item){
            i++;
            return(
                <Lesson_tbody_td key={i} node1={i} node={node} {...item}/>
            );
        });
        return (
            <tr>
                <td>{node}</td>
                {items}
            </tr>
        )
    }

});
module.exports =Lesson_tbody_tr;