/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Lesson_thead_th=require('./Lesson_thead_th');
var Lesson_thead = React.createClass({
    render: function () {
        "use strict";
        var data=[
            {text:""},
            {text:"周一"},
            {text:"周二"},
            {text:"周三"},
            {text:"周四"},
            {text:"周五"},
            {text:"周六"},
            {text:"周日"}
        ];
        var items=data.map(function(item){
            return(
                <Lesson_thead_th text={item.text} key={item.text} />
            )
        });
        return (
            <thead>
               <tr>
                   {items}
               </tr>
            </thead>
        )
    }
});
module.exports =Lesson_thead;