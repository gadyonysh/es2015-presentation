### WeakMap

[Prev](16-Set.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](18-Proxy.md)

Like WeekMap but consists of values only (WeakSet = Set + Weakness - Iterable)

1. Not iterable
2. Values must be reference types
3. Garbage collected

```js
// has only .add, .has, .delete methods
const set = new WeakSet();

set.add({});
set.add(new Date());
set.add(1); // throws an exception

// or:
const newSet = new WeakSet([() => 'one', [], new Date()]);
```

Usage: (I've found only one example)
```js
const fooInstances = new WeakSet();

class Foo
{
  constructor()
  {
    fooInstances.add(this);
  }

  method()
  {
    // check that prototype isn't faked
    if (!fooInstances.has(this)) { throw new Error('Foo.prototype.method called on incompatible object.'); }
  }
}
```

[Prev](16-Set.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](18-Proxy.md)