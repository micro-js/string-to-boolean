/**
 * Expose stringToBoolean
 */

module.exports = stringToBoolean

/**
 * stringToBoolean
 */

function stringToBoolean (val) {
  if (val === 'true') return true
  if (val === 'false') return false
  throw new TypeError(`${val} is not a boolean`)
}
