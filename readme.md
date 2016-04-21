# raven-clean [![Build Status](https://travis-ci.org/bendrucker/raven-clean.svg?branch=master)](https://travis-ci.org/bendrucker/raven-clean)

> Generate clean raven-js filenames and stack traces by scrubbing cache busting parameters


## Install

```
$ npm install --save raven-clean
```


## Usage

```js
var ravenClean = require('raven-clean')
var Raven = require('raven-js')

Raven.config(DSN, {
  dataCallback: ravenClean(/[0-9A-Fa-f]{12}_/)
})
.install()
```

raven-clean will strip the provided cache busting parameters from your file URLs and stack frames, allowing for consistent exception reporting and aggregation.

## API

#### `ravenClean(regex)` -> `function(string)`

Returns a function that strips the matched parameter from the input string.

##### regex

*Required*  
Type: `regex`

A regular expression matching your cache busting parameter, including any punctuation that should be stripped.


## License

MIT © [Ben Drucker](http://bendrucker.me)
