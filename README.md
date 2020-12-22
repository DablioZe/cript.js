# CriptJS - A text encryptor

## Installation

```
$ npm install cript.js
```

## How to use

It's very simple:

_To encrypt a text use: `cript.toCode(text, function(err, result){});`_

```javascript
const cript = require("cript.js");
 
cript.toCode("Hello World!", console.log);
// returns: "kkiiddakKSMLjuudAAAAAAAGjsumjhIuoPSaSJUCSsiouljgSKCALPjuudAAmeOlHOkishcj"
```

_To decrypt a code use: `cript.toText(code, function(err, result){});`_

```javascript
const cript = require("cript.js");
const myCode = "kkiiddakKSMLjuudAAAAAAAGjsumjhIuoPSaSJUCSsiouljgSKCALPjuudAAmeOlHOkishcj"

cript.toText(myCode, console.log);
// returns: "Hello World!"
```

> ***Note***: This is a simple encryption / decryptor, there may be some bugs, if it does, report it to [CriptJS/Inssues](https://github.com/DablioZe/cript.js/issues). This encryption generates a greater response than the input, so we recommend that you do not use it with very large texts because it can interfere with the processing of the machine.

_i hope you enjoy :D_