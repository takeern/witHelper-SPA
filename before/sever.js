var express = require('express');
var app = express();
var myConnect=require('./mysqlConnect');
var bodyParser = require('body-parser');
var getLesson=require('./getLesson');
var getChooseLesson=require('./getChooseLesson');
var cookie = require('cookie-parser');
var session = require('express-session');
app.use(cookie('fuck'));
app.use(session({
  // 建议使用 128 个字符的随机字符串
  secret:'fuck',
  resave:false,
  saveUninitialized:true,
  cookie: { maxAge: 1000*60*10 ,secure:false,httpOnly:true}
}));
app.use(express.static('cs'));
myConnect.connect();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.get('/', function (req, res) {
  console.log('in');
  res.sendFile( __dirname + "/" + "cs/index.html" );
});
app.post('/getState',urlencodedParser,function(req,res){
  "use strict";
  console.log('getState');
  var resData;
  var sess=req.session;
  console.log(sess);
  if(req.signedCookies.user&&req.signedCookies.user.user){
    resData={'login':'success'};
    sess.user=req.signedCookies.user.user;
  }
  else {
    resData={'login':'fail'};
  }
  if(req.signedCookies.lesson){
    resData.lesson='success';
  }
  else {
    resData.lesson='fail';
  }
  res.end(JSON.stringify(resData));
});
app.post('/getLesson',urlencodedParser ,function (req, res) {
  console.log('getlesson');
  var xh,mm,data;
  xh=req.body.xh||req.signedCookies.lesson.xh;
  mm=req.body.mm||req.signedCookies.lesson.mm;
  console.log(xh,mm);
  var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
  if(reg.test(xh)||reg.test(mm)){
    data={state:'账号密码错误'};//代表输入不为字符串
  }
  else {
    data=getLesson(xh,mm);

    if(data&&data.state!=='fail'){
      res.cookie('lesson',{"user":xh,"pas":mm},{expires:new Date(Date.now())+1000*60*60*24*30,maxAge:1000*60*60*24*30,httpOnly:true,signed:true});
    }
    else {
      data={'state':"internet eeror!"};
    }
  }
  res.end(JSON.stringify(data));
});
app.post('/getChooseLesson',urlencodedParser,function(req,res){
  "use strict";
  console.log('getChooseLesson');
  var xh=req.signedCookies.lesson.xh;
  var mm=req.signedCookies.lesson.mm;
  var data;
  if(!xh){
    data={state:'账号密码错误'};
    res.end(JSON.stringify(data));
  }
  var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
  if(reg.test(xh)||reg.test(mm)) {
    data={state:'账号密码错误'};
  }
  else {
    data=getChooseLesson(xh,mm);
  }
  if(!data){
    data={state:'internet eeror'};
  }
  console.log(data);
  res.end(JSON.stringify(data));
});
app.post('/login',urlencodedParser,function(req,res){
  "use strict";
  if(req.body.user){
    var pas=req.body.pas,user=req.body.user;
    var response;
    var sql='SELECT * FROM user WHERE user=? AND password=?';
    var query=myConnect.query(sql,[myConnect.guolv(user),myConnect.guolv(pas)],function(eer,results){
      "use strict";
      if(eer){
        console.log('query'+eer);
      }
      else{
        if(results.length==1){
          response={'login':'success'};
          res.cookie('user',{"user":req.body.user,"pas":req.body.pas},{expires:new Date(Date.now())+1000*60*60*24*30,maxAge:1000*60*60*24*30,httpOnly:true,signed:true});
          var sess=req.session;
          sess.user=req.body.user;
        }
        else {
          response={'login':'defeat'};
        }
      }
      console.log(response);
      res.end(JSON.stringify(response));
    });
  }
});
app.post('/register',urlencodedParser,function(req,res){
  "use strict";
  if(req.body.user){
    var pas=req.body.pas,user=req.body.user,phone=req.body.phone;
    var response;
    var sql='INSERT INTO `user`(`password`, `phone`, `user`) VALUES (?,?,?)';
    var query=myConnect.query(sql,[myConnect.guolv(pas),myConnect.guolv(phone),myConnect.guolv(user)],function(eer,results){
      "use strict";
      if(eer){
        if(eer.code==='ER_DUP_ENTRY'){
          response={'register':'repeat'};
        }
      }
      else{
        if(results.insertId){
          response={'register':'success'};
          res.cookie('user',{"user":req.body.user,"pas":req.body.pas},{expires:new Date(Date.now())+1000*60*60*24*30,maxAge:1000*60*60*24*30,httpOnly:true,signed:true});
          var sess=req.session;
          sess.user=req.body.user;
        }
        else {
          response={'register':'fail'};
        }
      }
      console.log(response);
      res.end(JSON.stringify(response));
    });
  }
});
app.get('/getActive',urlencodedParser,function(req,res){
  "use strict";
  console.log('active');
  var InfoData,contentData,items;
  var sql='SELECT * FROM `active` inner join `user` on active.user=user.user order by active.id DESC limit 0,6 ';
  var query=myConnect.query(sql,function(eer,results) {
    items=results.map(function(item){
      return{
        "contentData":{
          'id':item.id,
          'title':item.title,
          'startTime':item.startTime,
          'finishTime':item.finishTime,
          "organizer":item.organizer,
          "site":item.site,
          "ticket":item.ticket,
          "des":item.des
        },
        'footData':{
          'name1':item.user,
          'labelState':item.state
        }
      }
    });
    var data={active:items};
    res.end(JSON.stringify(data));
  });
});
app.get('/setInfoForm',urlencodedParser,function(req,res) {
  "use strict";
  console.log('setInfoForm');
  var title = req.query.title, startTime = req.query.startTime, finishTime = req.query.finishTime,site=req.query.site,organizer = req.query.organizer, des = req.query.des, ticket = req.query.ticket;
  console.log(title);
  var sql = 'INSERT INTO `active`( `title`, `startTime`, `finishTime`, `organizer`, `site`, `ticket`, `des`, `user`) VALUES (?,?,?,?,?,?,?,?)';
  var response;
  var query = myConnect.query(sql, [myConnect.escape(title), myConnect.escape(startTime), myConnect.escape(finishTime), myConnect.escape(organizer), myConnect.escape(site), myConnect.escape(ticket), myConnect.escape(des), 'takeern'], function (eer, results) {
    if(eer){
      console.log(eer);
    }
    if (results.insertId) {
      response = {'setInfoForm': 'success'};
    }
    else {
      response = {'setInfoForm': 'fail'};
    }
    console.log(response);
    res.end(JSON.stringify(response));
  });
});
app.get('/getAccount',urlencodedParser,function(req,res){
  "use strict";
  console.log(req.session.user);
  if(req.session&&req.session.user){
    var sql='SELECT * FROM user WHERE user=? ';
    var query=myConnect.query(sql,[myConnect.guolv(req.session.user)],function(eer,results) {
      if(eer){
        console.log(eer);
      }
      else {
        console.log(typeof results);
        var data;
        var item=results.map(function(item){

          var time=JSON.stringify(item.time);
          time=time.split('T')[0].slice(1).split('-');
          var nowDay=new Date();
          time[0]=nowDay.getFullYear()-time[0];
          time[1]=nowDay.getMonth()+1-time[1];
          time[2]=nowDay.getDate()-time[2];
          var bean=time[0]*365+time[1]*30+time[2];
          bean=parseInt(bean/7);
          data={
            name:item.user,
            'bean':bean
          }
        });
        console.log(data);
        res.end(JSON.stringify(data));
      }
    })
  }
});
app.get('/getLogout',urlencodedParser,function(req,res){
  "use strict";
  res.clearCookie('user');
  res.clearCookie('lesson');
  req.session.destroy();
  var data={'state':'success'};
  res.end(JSON.stringify(data));

});
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
});