/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var LessonName=require("./LessonName");
var LessonTime=require('./LessonTime');
var LessonSite=require('./LessonSite');
var LessonCredit=require('./LessonCredit');
var LessonNumber=require('./LessonNumber');
var LessonState=require('./LessonState');
var ChooseDiv = React.createClass({
    render: function () {
        "use strict";
        return (
            <div>
                <LessonName lessonName={this.props.lessonName}/>
                <LessonTime lessonTime={this.props.lessonTime}/>
                <LessonSite lessonSite={this.props.lessonSite}/>
                <LessonCredit lessonCredit={this.props.lessonCredit}/>
                <LessonNumber lessonNumber={this.props.lessonNumber} />
                <LessonState lessonId={this.props.lessonId}/>
            </div>
        )
    }
});
module.exports =ChooseDiv;