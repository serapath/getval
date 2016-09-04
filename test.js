var test = require('tape')

var getval = require('./')

test('getval', function (t) {
  t.plan(6)
  var state = { '': 3, a: { b: [5,6,7], '': { '': 15 } } }
  console.log('state =',state)
  t.deepEqual(getval(state), { '': 3, a: { b: [5,6,7], '': { '': 15 } } }, "getval(state) -> { '': 3, a: { b: [5,6,7], '': { '': 15 } } }")
  t.deepEqual(getval(state, 'a//'), 15, "getval(state, 'a//') -> 15")
  t.deepEqual(getval(state, ''), 3, "getval(state, '') -> 3")
  t.deepEqual(getval(state, 'a/b'), [5,6,7], "getval(state, 'a/b') -> [5,6,7]")
  t.deepEqual(getval(state, 'a.b', '.'), [5,6,7], "getval(state, 'a.b', '.') // -> [5,6,7]")
  t.deepEqual(getval(state, 'a/b/0'), 5, "getval(state, 'a/b/0') -> 5")
})
