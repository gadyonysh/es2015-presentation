// Unsupported in transpilers

// Proxy modifies default object behavior with traps:
// get – traps proxy.prop and proxy['prop']
// set – traps proxy.prop = value and proxy['prop'] = value
// has – traps in operator
// deleteProperty – traps delete operator
// defineProperty – traps Object.defineProperty and declarative alternatives
// enumerate – traps for..in loops
// ownKeys – traps Object.keys and related methods
// apply – traps function calls
// construct – traps usage of the new operator
// getPrototypeOf – traps internal calls to [[GetPrototypeOf]]
// setPrototypeOf – traps calls to Object.setPrototypeOf
// isExtensible – traps calls to Object.isExtensible
// preventExtensions – traps calls to Object.preventExtensions
// getOwnPropertyDescriptor – traps calls to Object.getOwnPropertyDescriptor

// to create proxy:
const foo = new Proxy(target, handler);

// Usage example - to hide private members:
const createSecured = obj => {
  const hidePrivate = key => { if (key[0] === '_') { throw new Error('Unable to access private member.'); } };

  return new Proxy(obj, {
    get(target, key)
    {
      hidePrivate(key);

      return target[key];
    },

    set(target, key, value)
    {
      hidePrivate(key);

      return true;
    },

    has(target, key)
    {
      hidePrivate(key);

      return key in target;
    }
  });
};

const secured = createSecured({ _privateFoo: 'foo', publicBar: 'bar' });
secured._privateFoo = 'baz'; // throws Error
secured.publicBar = 'baz'; // it's ok

// Usage example - validation:
const validator = {
  set(target, key, value)
  {
    if (key !== 'age') { return true; }

    if (typeof value != 'number' || Number.isNaN(value))
    {
      throw  new TypeError('Age must be a number.');
    }

    if (value <= 0 || value > 99)
    {
      throw new RangeError('Age must be in 0-99 range.');
    }

    return true;
  }
};
const person = { age: 22 };
const proxy = new Proxy(person, validator);

try
{
  proxy.age = userInput;
}
catch (e)
{
  alert(e.message);
}

// Revocable proxies:
const target = {};
const handler = {};
const {proxy, revoke} = Proxy.revocable(target, handler);

proxy.foo = 'bar';
console.log(proxy.foo); // "bar"

revoke();
console.log(proxy.foo); // throws Error
