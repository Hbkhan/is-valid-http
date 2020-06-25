# is-valid-http

![Last version](https://img.shields.io/badge/npm-v1.0.0-blue)

> Check if a string is a HTTP/HTTPS 

## Install

```bash
$ npm install is-valid-http
```

## Usage


```js
const isUrlCheck = require('is-valid-http');

isUrlCheck('https://example.com'); //=> true
isUrlCheck('http://example.com'); //=> true
isUrlCheck('https://localhost'); //=> true
isUrlCheck('http://localhost'); //=> true
isUrlCheck('example.com'); //=> false
isUrlCheck('https://example'); //=> false
isUrlCheck('ftp://example'); //=> false
isUrlCheck('gopher://example'); //=> false
isUrlCheck('notvalidurl'); // => false
