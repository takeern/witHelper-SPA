/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var formChooseLesson=require('../../stores/sendStore/formChooseLesson');
var LessonState= React.createClass({
    getInitialState:function(){
        "use strict";
        return({
            state:false
        })
    },
    handeClick:function(){
        "use strict";
        formChooseLesson.set(this.props.lessonId);
        this.setState({
            state:!this.state.state
        })
    },
    render: function () {
        "use strict";
        if(this.state.state===false){
            var classString="glyphicon glyphicon-remove choose_lesson_eeror"
        }
        else {
            classString="glyphicon glyphicon-ok choose_lesson_ok"
        }
        return (
            <span className={"choose_state "+classString} onClick={this.handeClick}/>
        )
    }

});
module.exports =LessonState;