[Prev](06-template-literals.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](09-classes.md)

### Object literals

Property value shorthand:
```js
const foo = 'bar';

const obj = { foo };

// equal to
const obj = { 'foo': foo };
```

Methods shorthand:
```js
const obj = {
  foo(bar){},
  
  * myGenerator(){/* ... */}
};

// equal to
const obj = {
  'foo': function(bar) {},
  
  'myGenerator': function* () {/* ... */}
};
```

Computed property names:
```js
const prefix = 'prefix_';
const obj = {
  [prefix + 'foo']: 'bar',
  [prefix + 'bar']: 'baz',
  [prefix + 'method']() {/* ... */}
};

// equal to
const obj = {
  'prefix_foo': 'bar',
  'prefix_bar': 'baz',
  'prefix_method': function() {/* ... */}
};
```

Computed properties cannot be used with shorthands:
```js
const foo = 'foo';
const obj = { [foo] }; // throws an error
```

In ES2015 we can duplicate object props in literal:
```js
const obj = { one: 0, one: 1 }; // no error in ES2015 - obj is { one: 1 }
```

[Prev](06-template-literals.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](09-classes.md)