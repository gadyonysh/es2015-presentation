// Object literals:

const obj = { foo };
// equal to const obj = { foo: foo };

const obj = { foo(bar){} };
// equal to const obj = { foo: function(bar) {} };

// computed property names:
const prefix = 'prefix_';
const obj = {
  [prefix + 'foo']: 'bar',
  [prefix + 'bar']: 'baz'
};
// equal to: const obj = { prefix_foo: 'bar', prefix_bar: 'baz' };

// computed properties cannot be used with shorthands:
const foo = 'foo';
const obj = { [foo] }; // throws an error

// In es2015 we can duplicate object props in literal:
const obj = { one: 0, one: 1 }; // no error in ES2015 obj is { one: 1 }