/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Item=require('./item');
var infoStore=require('../../stores/infoStore.js');
var Item_wrapper = React.createClass({
    getInitialState:function(){
        "use strict";
        var data=infoStore.getItemData();
        return({
            data:data
        })
    },
    _onChange:function(){
        "use strict";
        if(this.isMounted()){
            var data=infoStore.getItemData();
            this.setState({
                data:data
            });
        }
    },
    componentDidMount: function() {
        infoStore.addChangelistener(this._onChange);
    },
    componentWillUnmount: function() {
        infoStore.removeChangeListener(this._onChange);
    },
    render: function () {
        "use strict";
        var data=this.state.data;
        if(data){
            var items=data.map(function(item){
                return(
                    <Item {...item.contentData} {...item.footData} key={item.contentData.id}/>
                );
            },this);
            return (
                <div className="item_wrapper">
                    {items}
                </div>
            )
        }
        else {
            return( null)
        }
    }
});
module .exports=Item_wrapper;