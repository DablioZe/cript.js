# CriptJS - A text encryptor

## Installation

```
$ npm install cript.js
```

## How to use

It's very simple:

_To encrypt a text use: `cript.toCode(text, callback);`_

```javascript
const cript = require("cript.js");
 
cript.toCode("Hello World!", (err, result) => {
    if (err) throw err;
    console.log(result);
});
// result: "kkiiddakKSMLjuudAAAAAAAGjsumjhIuoPSaSJUCSsiouljgSKCALPjuudAAmeOlHOkishcj"
```

_To decrypt a code use: `cript.toText(code, callback);`_

```javascript
const cript = require("cript.js");
const myCode = "kkiiddakKSMLjuudAAAAAAAGjsumjhIuoPSaSJUCSsiouljgSKCALPjuudAAmeOlHOkishcj"

cript.toText(myCode, (err, result) => {
    if (err) throw err;
    console.log(result);
});
// result: "Hello World!"
```

> ***Note***: This is a simple encryption / decryptor, there may be some bugs, if it does, report it to [CriptJS/Issues](https://github.com/DablioZe/cript.js/issues). This encryption generates a greater response than the input, so we recommend that you do not use it with very large texts because it can interfere with the processing of the machine.

_i hope you enjoy :D_
