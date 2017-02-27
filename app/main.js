//main.js
var Login_wrapper=require('./components/login/login_wrapper');
var readyRender=require('./components/readyRender.js');
var Foot_nav=require('./components/foot/footNav');
var sendState=require('./getData/sendState');
var React=require('react');
var ReactDOM=require('react-dom');
var loginStore=require('./stores/sendStore/loginStore');
var statePage="活动";
ReactDOM.render(<Foot_nav statePage={statePage} />,document.getElementById('foot_nav'));
readyRender(statePage);
sendState();

