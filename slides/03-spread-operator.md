### Spread operator

[Prev](02-assignment-destructing.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](04-default-function-params.md)

```js
...[arr]
```

Array concatenation:
```js
const arr = [1, 2, ...[3, 4], 5];
// arr is [1, 2, 3, 4, 5]
// [1, 2, ...(condition ? [3, 4] : []), 5]
// [1, 2, ...(condition ? [3, 4] : [3]), 5]
```

Rest function params:
```js
fn(...[1, 2, 3]);
// equal to: fn(1, 2, 3)
// equal to: fn.apply(fn, [1, 2, 3])
// performance is better than with "arguments"

fn(first, second, ...third); // rest param have to be last in function definition
```

Usage example:
```js
function concat(...words) { return words.join(); }
```

It's possible to combine "new" and rest params
```js
const date = new Date(...dateArr);
```

Or just like this:
```js
otherFn(1, ...[2, 3], 4, ...[5, 6]);
arr.push(...otherArr);
```

Cast array-likes or iterables to array:
```js
let images = [...document.querySelectorAll('img')];
```

With destructing:
```js
const [first, , ...rest] = [1, 2, 3, 4, 5];
// first is 1, rest is [3, 4, 5]
```

[Prev](02-assignment-destructing.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](04-default-function-params.md)