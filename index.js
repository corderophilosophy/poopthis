'use strict'

var emoji = require('node-emoji')

/**
 * Returns a string surrounded by the poop emoji (poomoji)
 * @param string
 */

module.exports = function (string) {
  var string = string.trim()
  var poop = emoji.get('hankey')
  return poop + ' ' + string + ' ' + poop
}
