### Assignment destructing

[Prev](01-block-bindings.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](03-spread-operator.md)

object, equal to: const bar = foo.bar;
```js
const {bar} = foo;
```

object, equal to: const baz = foo.bar;
```js
const {bar: baz} = foo;
```

we can use default values:
```js
const {bar = 'default'} = foo;
const {bar: baz = 'default'};
// equal to: const baz = (typeof foo.bar == 'undefined') ? 'default' : foo.bar;
```

we can use nested destructing:
```js
const obj = { foo: { bar: 'baz' } };
const {foo: {bar}} = obj; // equal to: const foo = { bar: obj.foo.bar };
```

array, equal to: const a = 1, b = 2;
```js
const [a, b] = [1, 2];
```

use coma, to skip array item:
```js
const [a, , b = 3] = [1, 2]; // const a = 1, b = 3;
```

usage example:
```js
let a = 1;
let b = 2;

if (a > b)
{
  [a, b] = [b, a];
}
```

eg we can use it in functions (destructed params are required):
```js
function displayAge({name, age}) {
  console.log(`${name} is ${lastName} years old.`);
}
```
```js
function setCookie(
  name,
  value,
  {
    secure = false,
    path = '/',
    domain = 'wa.local',
    expires = new Date(Date.now() + 3600000)
  }
) {/* code */}
```

complex example:
```js
const node = {
  type: 'nodeType',
  name: 'nodeName',
  loc: {
    start: {
      line: 1,
      column: 1
    },
    end: {
      line: 1,
      column: 4
    }
  },
  range: [0, 3]
};

const {
  loc: { start: { line: startLine } },
  range: [ startIndex ]
  } = node;

console.log(startLine); // 1
console.log(startIndex); // 0
```

[Prev](01-block-bindings.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](03-spread-operator.md)