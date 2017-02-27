/**
 * Created by Administrator on 2016/12/7.
 */
var AppDispatcher=require('../dispatcher/dispatcher');
var React=require('react');
var ReactDOM=require('react-dom');
var ItemContent=require('../components/itemContent/Item_content_wrapper.js');
function open(itemId){
    var action={
        type:'openInfoContent',
        data:itemId
    };
    AppDispatcher.dispatch(action);
}
function openInfoContent(itemid){
    "use strict";
    open(itemid);
    ReactDOM.render(<ItemContent />,document.getElementById('itemContent'));
}
module .exports=openInfoContent;