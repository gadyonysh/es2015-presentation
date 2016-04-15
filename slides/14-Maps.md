### Maps

[Prev](13-Generators.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](15-WeakMaps.md)

**Maps is an improved alternative to object-based hash-maps.**
Advantages:
1. No security issues for user-provided keys (__proto__, toString etc)
2. Iterable protocol is already implemented - no magic required for iterating (like Object.keys) - for...of loop
3. Keys can be any object, not only strings/numbers/symbols (eg even DOM-nodes as keys and it's API as values)

```js
const map = new Map();

map.set('key 1', 'value 1');
map.set('key 2', 'value 2');

// is equal to: (can be initiated with any iterables that produces [['key', 'value'], ['key', 'value']])
const newMap = new Map([
  ['key 1', 'value1 '],
  ['key 2', 'value 2']
]);
```

Iterating with loop using destructing (always iterated in insertion order):
```js
for (let [key, value] of newMap)
{
  console.log(`${key}: ${value}`);
}

// or:
newMap.forEach((value, key) => console.log(`${key}: ${value}`));
```

we can retrieve entries (because it's "iterable")
```js
console.log(map[Symbol.iterator] === map.entries); // true
console.log([...newMap.entries()]); // [['key 1', 'value1 '], ['key 2', 'value 2']]
console.log([...newMap]); // [['key 1', 'value1 '], ['key 2', 'value 2']]

console.log([...newMap.keys()]); // ['key 1', 'key 2']
console.log([...newMap.values()]); // ['value 1', 'value 2']
```

Methods:
```js
// to set value
map.set('key 1', 'value 1'); // set value "value 1" for key "key 1"

// to get value
map.get('key 1'); // returns "value 1"

// to check if an entry for key exists
map.has('key 1'); // returns true (1 as key is not '1' string)

// to remove entry
map.delete('key 2');

// to clear collection
map.clear(); // console.log([...map]); outputs "[]"

// has read-only property "size"
console.log(newMap.size); // 2
```

[Prev](13-Generators.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](15-WeakMaps.md)