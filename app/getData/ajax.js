/**
 * Created by Administrator on 2017/1/20.
 */
var reqwest=require('reqwest');
require('xhr2');
reqwest({
    url: '/getLesson'
    , method: 'post'
    , data: { foo: 'bar', baz: 100 }
    , success: function (resp) {
        console.log(resp.response);
    }
});