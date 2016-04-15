// Like WeekMap but consists of values only (WeakSet = Set + Weakness - Iterable)
// 1. No iterable
// 2. Values must be reference types
// 3. Garbage collected

// has only .add, .has, .delete methods
const set = new WeakSet();

set.add({});
set.add(new Date());
set.add(1); // throws an exception

// or:
const newSet = new WeakSet([() => 'one', [], new Date()]);

// Usage: (I found only one example
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