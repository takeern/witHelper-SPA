/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var BeStart = React.createClass({
    getInitialState:function(){
        "use strict";
        return(
        {state :'success'}
        )
    },
    addFiter:function (){
        "use strict";
        var header=document.getElementById('header');
        var item_container=document.getElementById('item_container');
        var foot_nav=document.getElementById('foot_nav');
        header.className=header.className+' '+'beFiter';
        item_container.className=item_container.className+' '+'beFiter';
        foot_nav.className=foot_nav.className+' '+'beFiter';
    },
    removeFiter:function(){
        "use strict";
        var header=document.getElementById('header');
        var item_container=document.getElementById('item_container');
        var foot_nav=document.getElementById('foot_nav');
        header.className='header';
        item_container.className='item_container';
        foot_nav.className='foot_nav';
        if(this.isMounted()){
            this.setState({
                state:'fail'
            })
        }
    },
    onStop:function(e){
        "use strict";
        e.target.preventDefault();
    },
    render: function () {
        "use strict";
        if(this.state.state==='fail'){
            return (null)
        }
        this.addFiter();
        return (
            <div className="beStart" onClick={this.removeFiter}>
                <div className="beStart_wrapper" onClick={this.onStop} >
                    <div className="beStart_header"></div>
                    <div className="beStart_content"></div>
                </div>
            </div>
        )
    }
});
module.exports =BeStart;