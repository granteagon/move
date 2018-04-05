# _.move LoDash mixin
Move an item in an array

LoDash issue is [here](https://github.com/lodash/lodash/issues/1701).  Give it a 👍 if you want to see it added to Lodash.

## Usage
- Install the package via NPM
```
npm install lodash-move
```
or via Yarn
```
yarn add lodash-move
```

- Import it into your project:
```js
// Node.JS
const move = require('lodash-move')

// ES6+
import move from 'lodash-move'
```
- Use it!

## Syntax
```js
move(array, fromIndex, toIndex)
```

## Example
```js
move(['a', 'b', 'c'], 2, 0)
// -> ['c', 'a', 'b']

move([{name: 'Fred'}, {name: 'Barney'}, {name: 'Wilma'}, {name: 'Betty'}], 2, 1)
// -> [{name: 'Fred'}, {name: 'Wilma'}, {name: 'Barney'}, {name: 'Betty'}]
```
