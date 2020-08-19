# urls
## homepage
[https://code.insistime.com/q-ajax](https://code.insistime.com/q-ajax)

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

## documentation

# api
## setItem
```javascript
'use strict';

var qls = require('q-ajax');

var test = function(){
	var name = 'name';
	var value = 'value';
	qls.setItem(name, value);

	var expires = 1;
	qls.setItem(name, value, expires);
};

test();
```

# version
## 0.0.1.20200819
1. init project
2. http method