/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Lesson_table=require('./Lesson_table');
var ReactDom=require('react-dom');
var sendLesson=require('../../actions/sendLesson');
var lessonStore=require('../../stores/lessonStore');
var Lesson_table_wrapper = React.createClass({
    getInitialState:function(){
        "use strict";
        var lessonData=lessonStore.getLesson();
        return({
            state:lessonData
        })
    },
    _onChange:function(){
        "use strict";
        var lessonData=lessonStore.getLesson();
        if(this.isMounted()){
            this.setState({
                state:lessonData
            })
        }
    },
    componentDidMount:function(){
        "use strict";
        lessonStore.addChangeListener(this._onChange);
    },
    componentWillUnmont:function(){
        "use strict";
        lessonStore.removeChangeListener(this._onChange);
    },
    render: function () {
        "use strict";
        if(this.state.state){
            return (
                <div className="table_wrapper">
                    <Lesson_table data={this.state.state}/>
                </div>
            )
        }
        else {
            return(
                <div className="table_wrapper"></div>
            );
        }
    }

});
module.exports =Lesson_table_wrapper;