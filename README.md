# getval
read values from nested object like from a flat key value store

# usage
`npm install getval`

```js
  var getval = require('getval')
  var state = { '': 3, a: { b: [5,6,7], '': { '': 15 } } }
  console.log('state =',state)
  console.log(getval(state)) // => { '': 3, a: { b: [5,6,7], '': { '': 15 } } }
  console.log(getval(state, 'a//')) // => 15
  console.log(getval(state, '')) // => 3
  console.log(getval(state, ['a','b'])) // => [5,6,7]
  console.log(getval(state, 'a/b')) // => [5,6,7]
  console.log(getval(state, 'a.b', '.')) // => [5,6,7]
  console.log(getval(state, 'a/b/0')) // => 5

```

# related
* see [setval](https://www.npmjs.com/package/setval)
