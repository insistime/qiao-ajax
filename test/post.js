'use strict';

var q = require('../lib/q-ajax');

var test = async function(){
    try{
        var url = 'http://icanhazip.com/';
        var res = await q.post(url);
        console.log(res);
    }catch(e){
        console.log(e);
    }
};

test();