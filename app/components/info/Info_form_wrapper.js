/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var ReactDom=require('react-dom');
var Info_form=require('./Info_form');
var openItemContent=require('../stores/InfoFormStore.js');
var Info_form_wrapper = React.createClass({

    render: function () {
        "use strict";
        return (
            <div className="info_form_wrapper">
                <Info_form />
            </div>
        )
    }
});

ReactDom.render(<Info_form_wrapper  />,document.getElementById('item_container'));
module.exports =Info_form_wrapper;