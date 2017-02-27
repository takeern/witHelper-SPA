/**
 * Created by Administrator on 2016/11/20.
 */
var React=require('react');
var infoStore=require('../../stores/infoStore');
var Item_content_foot=require('./Item_content_foot');
var Item_content=require('./item_content');
var Item_content_wrapper = React.createClass({
    getInitialState:function(){
        "use strict";
        return{
            update:'open'
        }
    },
    changeItem:function(newState){
        "use strict";
        console.log('close');
        this.setState({
            update:newState
        })
    },
    componentDidMount:function(){
        "use strict";
        infoStore.addChangelistener(this.openItem);
    },
    closeItem:function(newstate){
        "use strict";
        this.setState({
            update:newstate
        })
    },
    componentWillUnmount:function(){
        "use strict";
        infoStore.removeChangeListener(this.openItem);
    },
    openItem:function(){
        "use strict";
        this.setState({
            update:open
        })
    },
    render: function () {
        "use strict";
        var data=infoStore.getItemContentData();
        console.log(data);
        console.log(this.state.update);
        if(this.state.update=='close'){
            return null
        }
        var classstring="";
        return (
            <div className={"item_content_wrapper "+classstring}  >
                <Item_content {...data.contentData} />
                <Item_content_foot {...data.footData} closeItem={this.closeItem}/>
            </div>
        )
    }
});

module.exports =Item_content_wrapper;