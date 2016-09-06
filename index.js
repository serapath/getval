var xObject = require('x-is-object')
var xString = require('x-is-string')
var xDTypeArray = require('x-is-ducktype-array')
var dsplit = require('dsplit')
module.exports = getval
function getval (obj, path, delimiter) {
  if (xObject(obj)) {
    var keys = xDTypeArray(xString,path) ? path : dsplit(path, delimiter)
    var len = keys.length-1
    if (~len) {
      for(var i=0; i<len; i++) {
        obj = obj[keys[i]]
        if (xObject(obj)) continue
        else return
      }
      return obj[keys[len]]
    }
    return obj
  }
}
