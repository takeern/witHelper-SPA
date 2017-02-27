/**
 * Created by Administrator on 2016/11/20.
 */
var fluxStore=require('./fluxStore');
var ChooseLessonStore=fluxStore({actionType:'sendChooseLessonData'});
module.exports = ChooseLessonStore;