/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var ChooseDiv=require('./ChooseDiv');
var ReactDOM=require('react-dom');
var formChooseLesson=require('../../stores/sendStore/formChooseLesson');
var ChooseLessonStore=require('../../stores/chooseLessonStore');
var Choose_lesson_wrapper = React.createClass({
    getInitialState:function(){
        "use strict";
        var data=ChooseLessonStore.get();
        return({
            data:data
        })
    },
    _onChange:function(){
        "use strict";
        if(this.isMounted()){
            var data=ChooseLessonStore.get();
            this.setState({
                data:data
            });
        }
    },
    componentDidMount: function() {
        ChooseLessonStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        ChooseLessonStore.removeChangeListener(this._onChange);
    },
    handleButtonClick:function(){
        "use strict";
        formChooseLesson.sendData();
    },
    render: function () {
        "use strict";

        var i=0;
        if(this.state.data){
            var items=this.state.data.lessonData.map(function(item){
                i++;
                return(
                    <ChooseDiv {...item} key={i} />
                )
            });
            return (
                <div className="choose_lesson_wrapper">
                    <div className="choose_header">
                        <span className="lesson_name">课程名称</span>
                        <span className="lesson_time">上课时间</span>
                        <span className="lesson_site">上课地点</span>
                        <span className="lesson_credit">学分</span>
                        <span className="lesson_number">剩余人数</span>
                        <span className="choose_state ">选择状态</span>
                    </div>
                    <div className="choose_body">
                        {items}
                    </div>
                    <div   className="choose_button">
                        <button className="btn btn-success" onClick={this.handleButtonClick}>选课</button>
                    </div>
                </div>
            )
        }
        else {
            return (<div className="choose_lesson_wrapper"></div>);
        }
    }
});
module.exports =Choose_lesson_wrapper;