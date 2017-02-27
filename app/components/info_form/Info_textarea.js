/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var SendInfoForm=require('../../actions/SendInfoForm.js');
var Info_textarea = React.createClass({
    handleBlur:function(e){
        "use strict";
        SendInfoForm.SendInfoForm(e.target.value,e.target.name);
    },
    render: function () {
        "use strict";
        return (
            <div className="form-group  ">
                <label className="control-label" htmlFor="item_des">附加描述</label>
                <textarea rows="4" id="item_des" name="item_des" placeholder="如：活动现场有额外礼物 " onBlur={this.handleBlur} />
            </div>
        )
    }

});
module.exports =Info_textarea;