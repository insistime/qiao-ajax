# urls
## github
[https://github.com/insistime/q-ajax](https://github.com/insistime/q-ajax)

## npm
[https://www.npmjs.com/package/q-ajax](https://www.npmjs.com/package/q-ajax)

## donate
[http://uikoo9.com/donate](http://uikoo9.com/donate)

# started
## install
npm install q-ajax

## dependencies
1. http request by axios

## documentation
1. axios, https://www.npmjs.com/package/axios

# api
## get
```javascript
'use strict';

var q = require('q-ajax');

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