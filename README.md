# witHelper-SPA

工大助手 （获取校园信息，快速查，选课，复习资料上传及共享）

## 技术栈

 webpack+gulp+less+react+flux+后端nodejs

## 二次开发

 - 该项目结构为flux，react构建UI组件，然后挂载到项目上，无需了解具体的渲染方法即可添加新的功能模块同时不影响其他的功能模块。
 - 项目中所有`数据`都将经过store，action：
  - 从服务器获取到的数据放在getData中，在这里做个本地存储的接口将来可以做成PWA，优化数据获取。
  - 发送到服务器的数据全部通过存放在store中，过滤检查数据后，根据返回的res，存储在location。

## 模块构建

 以choose_lesson 模块为例：
 1. getChooseLessondata()（防止在action文件夹中）从服务器获取选课数据。

 2. 将上一步获取的数据通过action发布（`action已经被封装`）
 ```JavaScript
 var witAction=require('./action')；
 var sendChooseLessonData=witAction（'chooseLessonData'）;//参数代表要action.type
 module.exports = sendChooseLessonData;
 ```
 3. store中handle新数据时存储数据，同时触发数据change，告知订阅组件，新数据来了。（`store也已经被封装`）;
 ```JavaScript
 var fluxStore=require('./fluxStore');
 var ChooseLessonStore=fluxStore({actionType:'sendChooseLessonData'});//传递订阅action.type
 module.exports = ChooseLessonStore; 
 ```
 4. 组件更改state，重新渲染（此处数据全部渲染，没有使用shouldUpdate优化，因为第一用户很少会再次点击，也就是相同的数据很少，优化也取得不了多大效果，第二，因为此处数据可变性，基本每次选课都会变化，所以数据不会缓存。）
 为何将action，store封装，不使用redux之类的库，因为该项目的数据不需要在store中完成逻辑处理，我将数据全部放在每个组件中处理，大量的逻辑处理放在store中，会弱化store的意义，并且让它肿大<br>
 [更加详细的原因及我对flux的理解](http://www.cnblogs.com/takeern/p/6476262.html)
 [详细的模块构建](http://www.cnblogs.com/takeern/p/6476318.html)

## 模块挂载

```html
<header id="header" class="header"></header>
<div class="item_container" id="item_container"></div>
<nav class="foot_nav" id="foot_nav"></nav>
<div class="itemContent" id="itemContent"></div>
``` 
 一共4个容器，header，foot作为导航容器，container，content作为功能容器（分为主负），功能容器有对应的control，高等级的容器调用低等级容器的方法，每个平行等级容器是没有关联，耦合度低的，所以将来如果有新得容器出现也应该有对应的渲染方法。<br>
[详细的渲染方法及构建原因](http://www.cnblogs.com/takeern/p/6445885.html)
## 效果图
![](https://github.com/takeern/witHelper-SPA/blob/master/app/image/acPublish.png)![](https://github.com/takeern/witHelper-SPA/blob/master/app/image/lesson.png)![](https://github.com/takeern/witHelper-SPA/blob/master/app/image/some.png)![](https://github.com/takeern/witHelper-SPA/blob/master/app/image/leLogin.png)![](https://github.com/takeern/witHelper-SPA/blob/master/app/image/ac.png)![](https://github.com/takeern/witHelper-SPA/blob/master/app/image/chooseLesson.png)![](https://github.com/takeern/witHelper-SPA/blob/master/app/image/acLogin.png)
