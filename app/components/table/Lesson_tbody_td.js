/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Lesson_tbody_td = React.createClass({
    render: function () {
        "use strict";
        var color=this.props.node%3;
        var color1=this.props.node1%2;
        var classStr;
        if(color===1){
            if(color1==1){
                classStr="div_1";
            }
            else {
                classStr='div_2';
            }
        }
        if(color===2){
            if(color1===1){
                classStr="div_3";
            }
            else {
                classStr="div_4";
            }
        }
        if(color===0){
            if(color1===1){
                classStr="div_5";
            }
            else {
                classStr='div_6'
            }
        }
        if(!this.props.text.replace(/\s/g, "")){
            classStr='';
        }
        return (
            <td>
                <div className={"div "+classStr}>
                    {this.props.text}
                </div>
            </td>
        )
    }

});
module.exports =Lesson_tbody_td;