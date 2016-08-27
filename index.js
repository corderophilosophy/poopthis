'use strict'

const emoji = require('node-emoji')

/**
 * Returns a string surrounded by the poop emoji (poomoji)
 * @param string
 */

module.exports = function pooptimes (string, times) {
  if (times === undefined) {
    times = 1
  }

  const trimmedString = string.trim()
  const poop = emoji.get('hankey')
  if (times === 0) {
    return string
  }

  return pooptimes(poop + ' ' + trimmedString + ' ' + poop, times - 1)
}
