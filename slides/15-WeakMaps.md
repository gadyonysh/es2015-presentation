### WeakMap

[Prev](14-Maps.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](16-Set.md)

WeakMap is similar to map but:

1. Isn't iterable so it doesn't support methods like forEach, clear, entries, keys, values etc
2. Its keys must be reference types (if string/number/symbol was used as a key, you'll get an exception)

The main advantage is that entries are "garbage-collected" when they are referenced only in WeekMap (to avoid memory licks)
We can use it, for example, to collect metadata for objects while they're still in use like DOM nodes and their related API (eg caching)

```js
const keyOne = () => 'key 1';
const keyTwo = {};

const weakMap = new WeakMap([
  [keyOne, 'value 1'],
  [keyTwo, 'value 2']
]);

// for WeakMap we can use:
const keyThree = new Date();
weakMap.set(keyThree, 'value 3');

weakMap.has(keyOne); // true

weakMap.delete(keyThree);

weakMap.get(keyTwo); // "value 2"
```

[Prev](14-Maps.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](16-Set.md)