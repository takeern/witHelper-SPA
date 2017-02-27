/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var NameStore= require('../stores/stores');
var GetDate=require('../actions/action');

var CsName=React.createClass({
    getInitialState:function(){
        "use strict";
        return{
            name:'tq1'
        }
    },
    _onChange:function(){
        "use strict";
        console.log('change');
        this.setState({
            name:NameStore.getName1()
        });
    },
    componentDidMount:function(){
        "use strict";
        NameStore.addChangelistener(this._onChange);
        console.log('meiqianj');
    },
    componentWillUnmout:function(){
        "use strict";
        NameStore.removeChangeListener(this._onChange)
        console.log('unmount');
    },
    handleClick:function(){
        "use strict";
        GetDate.getdata('TAKEERN');
    },
    render:function(){
        "use strict";
        return(
            <div><button onClick={this.handleClick}>{this.state.name}</button></div>
        );
    }
});
ReactDOM.render(
    <CsName/>,
    document.getElementById('root')
);

