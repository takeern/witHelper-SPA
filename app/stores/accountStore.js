/**
 * Created by Administrator on 2016/11/20.
 */
var fluxStore=require('./fluxStore');
var accountStore=fluxStore({actionType:'sendAccountData'});
module.exports = accountStore;