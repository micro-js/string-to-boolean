/**
 * Imports
 */

var toBoolean = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should convert booleanish strings to booleans', function (t) {
  t.equal(toBoolean('true'), true)
  t.equal(toBoolean('false'), false)
  t.equal(toBoolean(true), true)
  t.end()
})

test('should throw type error if cant convert', function (t) {
  t.throws(_ => {
    toBoolean('0')
  }, TypeError)
  t.end()
})
