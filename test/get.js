'use strict';

var q = require('../lib/q-ajax');

var test = async function(){
    var url = 'http://icanhazip.com/';
    var res = await q.get(url);
    console.log(res);
};

test();