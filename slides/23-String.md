[Prev](22-Array.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](24-Async-functions.md)

### String

**New methods:**

_String.prototype.startsWith_ – whether the string starts with value
```js
const str = 'Hello world';
const hello = 'Hello';
const world = 'world';

str.startsWith(hello) === (str.indexOf(hello) === 0);
str.startsWith(world, 6) === (str.splice(6).indexOf(world) === 0);
```

_String.prototype.endsWith_ – whether the string ends in value
```js
str.endsWith(world) === (str.lastIndexOf(world) === str.length - world.length);
str.endsWith(hello, 5); // true
```

_String.prototype.includes_ – whether the string contains value anywhere
```js
str.includes(hello) === (str.indexOf(hello) !== -1);
str.includes(hello, 3); // false
```

_String.prototype.repeat_ – returns the string repeated amount times
```js
'!'.repeat(3);
(new Array(3 + 1)).fill('').join('!');
```

_String.prototype[Symbol.iterator]_ – lets you iterate over a sequence of unicode code points (not characters)
```js
const text = 'foo';
for (let i = 0; i < text.length; i++)
{
  let codeUnit = text[i];

  console.log(codeUnit);
}

for (let codePoint of text) { console.log(codePoint); }
```


better unicode (UTF-16) support - "\u{26203}" == "𦈃" vs "\u26203" === "☠3"

_String.prototype.codePointAt_ – base-10 numeric representation of a code point at a given position in string

_String.fromCodePoint_ – given _...codePoints_, returns a string made of their unicode representations

_String.prototype.normalize_ – returns a normalized version of the string’s unicode representation

[Prev](22-Array.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](24-Async-functions.md)