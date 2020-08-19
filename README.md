# urls
## github
[https://github.com/insistime/qiao-ajax](https://github.com/insistime/qiao-ajax)

## npm
[https://www.npmjs.com/package/qiao-ajax](https://www.npmjs.com/package/qiao-ajax)

## donate
[http://uikoo9.com/donate](http://uikoo9.com/donate)

# started
## install
npm install qiao-ajax

## dependencies
1. http request by axios

## documentation
1. axios, https://www.npmjs.com/package/axios

# api
## get
```javascript
'use strict';

var q = require('qiao-ajax');

var test = async function(){
    try{
        var url = 'http://icanhazip.com/';
        var res = await q.get(url);
        console.log(res);
    }catch(e){
        console.log(e);
    }
};

test();
```

# version
## 0.0.1.20200819
1. init project
2. http method