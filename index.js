var dsplit = require('dsplit')
module.exports = getval
function getval (/*obj*/obj,/*str*/path,/*str*/delimiter) {
  var t = obj, keys = dsplit(path, delimiter)
  try { for (idx in keys) { t = t[keys[idx]] } } catch (e) { return }
  return t
}
