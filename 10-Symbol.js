// new primitive type
let symbol = Symbol();
typeof symbol === 'symbol'; // true

// symbols are unique and immutable:
Symbol() === Symbol() // false
Symbol('foo') === Symbol('foo') // false

// Can be used as object keys

// global symbols. Have cross-realm context (window, eval, iframe)
let fooSymbol = Symbol.for('foo');
Symbol.for('foo') === iframe.contentWindow.Symbol.for('foo') // true

// if symbol with key already exists, you'll get it
let symbolFoo = Symbol.for('foo');

symbolFoo === fooSymbol; // true

// get symbol's key:
Symbol.keyFor(fooSymbol) == 'foo' // true

// Predefined ("well-known") symbols - e.g @@hasInstance, @@iterator, @@match, @@replace, @@search, @@split etc
// Used by specification to define protocols, such as the iterable protocol over Symbol.iterator
// Not on the global registry, accessible through Symbol[name], e.g: Symbol.iterator. Cross-realm:
Symbol.iterator === iframe.contentWindow.Symbol.iterator // true

class SomeCollection
{

  get [Symbol.toStringTag]()
  {
    return 'SomeCollection';
  }
}

const myData = new SomeCollection();
Object.prototype.toString.call(myData) === '[object SomeCollection]';
// Chai example:
expect(myData).to.be.a('SomeCollection');

// accessible through Symbol[name], e.g Symbol.iterator

// how to retrieve?
let foo = {
  [Symbol()]: '1',
  [Symbol('two')]: '2',
  [Symbol.for('three')]: '3',
  four: '4'
};

console.log(Object.keys(foo)); // ['four']
console.log(JSON.stringify(foo)); // {"four":"4"}
for (const key in foo) { console.log(key); } // 'four'

// Object.getOwnPropertySymbols() - we can use for...of loop to iterate over them
console.log(Object.getOwnPropertySymbols(foo)); // [Symbol(), Symbol('two'), Symbol.for('three')]

// Usage:
// 1. To have unique value:
WA.Log.Level = {
  Debug: Symbol('WA.Log.Level.Debug'),
  Info: Symbol('WA.Log.Level.Info'),
  Warn: Symbol('WA.Log.Level.Warn'),
  Error: Symbol('WA.Log.Level.Error')
};
// 2. To prevent properties redefining
let hash = {
  [Symbol('foo')]: 'bar',
  [Symbol('foo')]: 'baz'
};

// 3. Pseudo-privacy:
const size = Symbol('size');
class CollectionExample
{
  constructor()
  {
    this[size] = 0;
  }

  add(item)
  {
    this[this[size]] = item;
    this[size]++;
  }

  static sizeOf(instance)
  {
    return instance[size];
  }
}

let data = new CollectionExample();
console.log(CollectionExample.sizeOf(data)); // 0
data.add('foo');
console.log(CollectionExample.sizeOf(data)); // 1

// 4. Defining protocols, e.g. to give developers ability to add hooks to their objects through your API
const inspect = console.Symbols.INSPECT;
const foo = {};
console.log(foo); // '{}'
foo[inspect] = () => 'gotcha!';
console.log(foo); // 'gotcha!';