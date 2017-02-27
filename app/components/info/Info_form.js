/**
 * Created by Administrator on 2016/11/20.
 */
var React = require('react');
var Info_form_group=require('./Info_form_group');
var Info_button=require('./Info_button');
var Inro_textarea=require('./Info_textarea');
var Info_form = React.createClass({
    render: function () {
        "use strict";
        console.log(this.props.data);
        console.log(this.data);
        var data=[
            {
                name:"item_title",
                labelText:"活动标题",
                placeholder:"请输入活动标题"
            },
            {
                name:"item_begintime",
                labelText:"活动举办时间",
                placeholder:"如：2016-10-11 14:00"
            },
            {
                name:"item_finishtime",
                labelText:"活动截止日期",
                placeholder:"如：2016-10-11 14:00"
            },
            {
                name:"item_site",
                labelText:"活动地点",
                placeholder:"如:L4013 大礼堂门前等"
            },
            {
                name:"item_organizer",
                labelText:"举办方",
                placeholder:"如:约跑圈 校宣传部"
            },
            {
                name:"item_ticket",
                labelText:"活动票种",
                placeholder:"如:免费 当场发售：￥10等"
            }
        ];
        var items=data.map(function(item){
                "use strict";
                return(
                    <Info_form_group labelText={item.labelText} placeholder={item.placeholder} key={item.labelText} name={item.name}/>
                )
            });
        return (
            <form role="form" className="info_form">
                {items}
                <Inro_textarea />
                <hr />
                <Info_button />
            </form>
        )
    }
});
module.exports =Info_form;