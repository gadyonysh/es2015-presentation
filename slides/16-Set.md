[Prev](15-WeakMaps.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](17-WeakSet.md)

### Sets

Set is similar to Map but doesn't have keys - values only. It is:

1. Also iterable (has .entries(), .keys(), .clear(), .size etc. Constructor can accept an iterable.)
2. Has "add" method instead of "set"
3. Doesn't have "get" method - there's no reason to use set.get(value) instead of value itself

```js
const set = new Set([
  'value 1',
  'value 2',
  'value 3',
  'value 4',
  'value 4'
]);

console.log(set[Symbol.iterator] === set.entries); // false

console.log(set[Symbol.iterator] === set.values); // true

console.log(set.keys === set.values); // true

console.log([...set]); // ['value 1', 'value 2', 'value 3', 'value 4']
console.log([...set.entries()]); // ['value 1', 'value 2', 'value 3', 'value 4']
```

Usage example:
```js
const divs = new Set([...document.querySelectorAll('div')]);

console.log(divs.size); // 42

divs.add(document.querySelector('div'));
console.log(divs.size); // 42 => no duplicates
```

[Prev](15-WeakMaps.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](17-WeakSet.md)