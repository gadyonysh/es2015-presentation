[Prev](21-Math.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](23-String.md)

### Array

_Array.from_ - creates Array instances from array-like objects (arguments, iterables etc)

```js
// earlier we could use something like this:
function castToArrayShort() { return [].slice.call(arguments); }

// using spread operator (obj must implement @@iterator through Symbol.iterator):
function es6CastToArray() { return [...arguments]; }

// but:
[...$('div')]; // TypeError: $(...)[Symbol.iterator] is not a function
Array.from($('div')); // [<div>, <div>, <div>, ...]

// signature:
Array.from(arrayLikeInput, mapFunction, mapFunctionContext);
// arrayLikeInput – the array-like or iterable object you want to cast
// mapFunction – a mapping function that’s executed on every item of input
// mapFunctionContext – the this binding to use when calling map

function typesOf()
{
  return Array.from(arguments, value => typeof value);
}
// can be done with rest params
const typesOf = (...args) => args.map(value => typeof value);
```

_Array.of_ – similar to new Array(...items), but without special cases - behaves like castToArrayShort:
```js
new Array(); // []
Array.of(); // []

new Array(undefined); // [undefined]
Array.of(undefined); // [undefined]

new Array(3); // [undefined, undefined, undefined]
Array.of(3); // [3]

new Array(1, 2, 3); // [1, 2, 3]
Array.of(1, 2, 3); // [1, 2, 3]

new Array(-1); // RangeError: Invalid array length
Array.of(-1); // [-1]
```

_Array.prototype.copyWithin_ – copies a sequence of array elements into somewhere else in the array, signature:
```js
Array.prototype.copyWithin(target, start = 0, end = this.length);

const items = [1, 2, 3, 4, 5, 6, 7];
items.copyWithin(4, 1, 3); // [1, 2, 3, 4, 2, 3, 5, 6, 7];
// similar to:
const copyWithin = (items, target, start = 0, end = items.length) => {
  items.splice(target, end - start, ...items.slice(start, end));
  return items;
};
```

_Array.prototype.fill_ – fills all elements of an existing array with the provided value
```js
new Array(3).fill(2); // [2, 2, 2]
[1, 2, 3].fill(1); // [1, 1, 1]
// no mapping function :(
[1, 2, 3].fill(function foo(){}); // [function foo(){}, function foo(){}, function foo(){}]
```

Array.prototype.find – returns the first item to satisfy a callback
```js
// similar to Array.prototype.some, but returns matching element or undefined instead of true or false
Array.prototype.find(
  (item, i, array) => item/* check something here */
);

[1, 2, 3].find(item => item > 1); // 2
[1, 2, 3].find(item => item === 5); // undefinded
```

Array.prototype.findIndex – returns the index of the first item to satisfy a callback
```js
// similar to Array.prototype.find and Array.prototype.some, but returns first index position or -1
[1, 2, 3].find(item => item > 1); // 1
[1, 2, 3].find(item => item === 5); // -1
```

Array.prototype.keys – returns an iterator that yields a sequence holding the keys for the array
```js
const items = [1, 2, 3];

items.keys(); // ArrayIterator {}
for (let key of items.keys())
{
  console.log(key);
}
// 0
// 1
// 2

[...items.keys()] // [0, 1, 2]
```

Array.prototype.values – returns an iterator that yields a sequence holding the values for the array
```js
const newItems = [1, 2, 3];
newItems.values(); // ArrayIterator {}
[...newItems.values()]; // [1, 2, 3]
for (let value of newItems.values())
{
  console.log(value);
}
```

Array.prototype.entries – returns an iterator that yields a sequence holding key value pairs for the array
```js
const chars = ['a', 'b', 'c'];
chars.entries(); // ArrayIterator {}
[...chars.entries()]; // [[0, 'a'], [1, 'b'], [2, 'c']]
for (let entry of chars.entries())
{
  console.log(entry);
}
```

Array.prototype[Symbol.iterator] – exactly the same as the Array.prototype.values method
```js
[...['a', 'b', 'c'][Symbol.iterator]()]; // ['a', 'b', 'c']
```

[Prev](21-Math.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](23-String.md)