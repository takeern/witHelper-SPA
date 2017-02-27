/**
 * Created by Administrator on 2017/1/28.
 */
var mysql=require('mysql');
var connection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'tq6614118',
    database:'oyster'
});
connection.guolv=function(data){
    "use strict";
    var re=/select|update|delete|truncate|join|union|exec|insert|drop|count|'|"|;|>|<|%/i;
    data=data.replace(re,"");
    return data;
};

module .exports=connection;