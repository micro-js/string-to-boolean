
# string-to-boolean

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Convert string to boolean.

## Installation

    $ npm install @f/string-to-boolean

## Usage

```js
var stringToBoolean = require('@f/string-to-boolean')

stringToBoolean('true') // => true
stringToBoolean('a') // throws TypeError
```

## API

### stringToBoolean(val)

- `val` - val to convert to boolean

**Returns:** boolean or throw TypeError

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/string-to-boolean.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/string-to-boolean
[git-image]: https://img.shields.io/github/tag/micro-js/string-to-boolean.svg?style=flat-square
[git-url]: https://github.com/micro-js/string-to-boolean
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/string-to-boolean.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/string-to-boolean
