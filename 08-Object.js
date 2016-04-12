// new method: shallow overwrite properties (only enumerable props will be copied - Object.keys)
Object.assign(target, ...sources);

const target = { one: 0, two: 1 };
Object.assign(target, { one: 1 }, { two: 2 }, { three: 3 });
// now target is { one: 1, two: 2, three: 3 }

Object.assign([1, 2, 3], [4, 5]);
// now target is [4, 5, 3]

// new method: behave like "===" with some differences (eg used in maps & sets):
Object.is('1', '1'); // true
Object.is({}, {}); // false

// differences:
Object.is(-0, +0); // false
Object.is(NaN, NaN); // true

// new method: getOwnPropertySymbols
const obj = {
  [Symbol('a')]: 'a',
  [Symbol('b')]: 'b',
  c: 'c',
  d: 'd'
};
Object.getOwnPropertySymbols(obj); // [Symbol(b), Symbol(d)]

// new method: setPrototypeOf (changing proto is very slow)
// equal to obj.__proto__ = proto;
const proto = { protoProp: 'proto prop' };
const obj = Object.setPrototypeOf({}, proto);

// super - proto reference
const proto = { getGreeting(name) { return `Hello, ${name}`; } };
const me = {
  __proto__: proto,
  getGreeting() {
    return super.getGreeting('Vladimir');
  }
};
console.log(me.getGreeting()); // Hello, Vladimir
