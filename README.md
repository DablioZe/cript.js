# CriptJS - A text encryptor

## Installation

```
$ npm install cript.js
```

## How to use

It's very simple:

_To encrypt a text use: `criptjs.encrypt(key, text, callback);`_

```javascript
const criptjs = require("cript.js");
 
criptjs.encrypt("my key", "Hello World!", (err, result) => {
    if (err) throw err;
    console.log(result);
});
// result: "µÞ×ÔÄè×É"
```

### If you change the key the result will also change.

```javascript
const criptjs = require("cript.js");
 
criptjs.encrypt("my other key", "Hello World!", (err, result) => {
    if (err) throw err;
    console.log(result);
});
// result: "µÞÛã¼á×É"
```

_To decrypt a code use: `criptjs.decrypt(key, text, callback);`_

```javascript
const criptjs = require("cript.js");
const myCode = "µÞ×ÔÄè×É";

criptjs.decrypt("my key", myCode, (err, result) => {
    if (err) throw err;
    console.log(result);
});
// result: "Hello World!"
```

> ***Note***: We recommend that you use very specific keys that only you know, do not share it with anyone. your data is safe, it will only be revealed if you use the right key! 

_i hope you enjoy :D_
