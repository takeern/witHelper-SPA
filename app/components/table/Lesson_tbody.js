/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Lesson_tbody_tr=require('./Lesson_tbody_tr');
var Lesson_tbody = React.createClass({

    render: function () {
        "use strict";
        var i=0;
        var items=this.props.content.lessonData.map(function(item){
            i++;
           return(
               <Lesson_tbody_tr key={i} node={i} content={item}  />
           );
        });
        return (
            <tbody>
            {items}
            </tbody>
        )
    }

});
module.exports =Lesson_tbody;