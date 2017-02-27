/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var ReactDOM=require('react-dom');
var lessonLoginStore=require('../../stores/sendStore/xhxmStore.js');
var Lesson_login_input=require('./Lesson_login_input');
var lessonStore=require('../../stores/lessonStore');
var Lesson_login_wrapper = React.createClass({
    getInitialState:function(){
        "use strict";
        return({
            state:true
        })
    },
    handleClick:function(){
        "use strict";
        lessonLoginStore.next();
    },
    _onChange:function(){
        "use strict";
        if(this.isMounted()){
            this.setState({
                state:false
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
                <div className="lesson_login_wrapper">
                    <div className="row">
                        <div className="col-md-offset-5 col-md-3">
                            <div className="form-login">
                                <h4>Welcome back.</h4>
                                <Lesson_login_input name="学号" />
                                <br/>
                                <Lesson_login_input name="密码" />
                                <br/>
                                <div className="wrapper">
                               <span className="group-btn">
                                   <a href="#" className="btn btn-primary btn-md" onClick={this.handleClick}>login <i className="fa fa-sign-in"/></a>
                                </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )
        }
        else {
            return null;
        }
    }

});
module.exports =Lesson_login_wrapper;
