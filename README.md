# CriptJS - A text encryptor

![CRIPTJS LOGO](https://i.ibb.co/KqSKs2x/20201225-165901.png)

![PACKAGE VESION](https://img.shields.io/npm/v/cript.js?color=red&label=CriptJS&style=for-the-badge)
![PACKAGE DOWNLOADS](https://img.shields.io/npm/dw/cript.js?color=red&label=Download&style=for-the-badge)
![PACKAGE SIZE](https://img.shields.io/bundlephobia/min/cript.js?color=red&label=Size&style=for-the-badge)
![PACKAGE LICENSE](https://img.shields.io/npm/l/cript.js?color=red&style=for-the-badge)

## Installation

```
$ npm install cript.js
```

## How to use

It's very simple:

_To encrypt a text use: `criptjs.encrypt(text, callback);`_

> ***Note***: You need to set the key before starting encryption or decryption: `criptjs.setKey("key")`

```javascript
const criptjs = require("cript.js");

criptjs.setKey("my key");

criptjs.encrypt("Hello World!", (err, result) => {
    if (err) throw err;
    console.log(result);
});
// result: "µÞ×ÔÄè×É"
```

### If you change the key the result will also change.

```javascript
const criptjs = require("cript.js");

criptjs.setKey("my other key");

criptjs.encrypt("Hello World!", (err, result) => {
    if (err) throw err;
    console.log(result);
});
// result: "µÞÛã¼á×É"
```

_To decrypt a code use: `criptjs.decrypt(text, callback);`_

```javascript
const criptjs = require("cript.js");
const myCode = "µÞ×ÔÄè×É";

criptjs.setKey("my key");

criptjs.decrypt(myCode, (err, result) => {
    if (err) throw err;
    console.log(result);
});
// result: "Hello World!"
```

#### You can generate a new key using `criptjs.genKey(length, types, callback)`

```javascript
const criptjs = require("cript.js");

criptjs.genKey(30, ["letters", "numbers"], (err, result) => {
    // This command generates a random result.
    if (err) throw err;
    console.log(result);
})
// result: "9T6z9y3e0A3M1M9i2i7e6y6k3C4U2o"
```

#### If you want only numbers to be generated, type `criptjs.genKey(length, "numbers", callback)`

```javascript
const criptjs = require("cript.js");

criptjs.genKey(30, "numbers", (err, result) => {
    // This command generates a random result.
    if (err) throw err;
    console.log(result);
})
// result: "564281673592645812365987546825"
```

#### You can also do this with `criptjs.genKey(length, "letters", callback)`

```javascript
const criptjs = require("cript.js");

criptjs.genKey(30, "letters", (err, result) => {
    // This command generates a random result.
    if (err) throw err;
    console.log(result);
})
// result: "BgsacHGdtAdSemNjkLdfTtYsdCiopS"
```

> ***Note***: We recommend that you use very specific keys that only you know, do not share it with anyone. your data is safe, it will only be revealed if you use the right key! 

### if you find an error or bug please report it at [CriptJS/Issues](https://github.com/DablioZe/cript.js/issues)

_i hope you enjoy :D_



