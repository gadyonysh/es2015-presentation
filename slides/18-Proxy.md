[Prev](17-WeakSet.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](19-modules.md)

### Proxies

_Unsupported in transpilers_

Proxy modifies default object behavior with traps:

* _get_ – traps _proxy.prop_ and _proxy\['prop']_
* _set_ – traps _proxy.prop = value_ and _proxy\['prop'] = value_
* _has_ – traps _in_ operator
* _deleteProperty_ – traps _delete_ operator
* _defineProperty_ – traps _Object.defineProperty_ and declarative alternatives
* _enumerate_ – traps _for..in_ loops
* _ownKeys_ – traps _Object.keys_ and related methods
* _apply_ – traps function calls
* _construct_ – traps usage of the _new_ operator
* _getPrototypeOf_ – traps internal calls to \[\[GetPrototypeOf]]
* _setPrototypeOf_ – traps calls to _Object.setPrototypeOf_
* _isExtensible_ – traps calls to _Object.isExtensible_
* _preventExtensions_ – traps calls to _Object.preventExtensions_
* _getOwnPropertyDescriptor_ – traps calls to _Object.getOwnPropertyDescriptor_

To create proxy:
```js
const foo = new Proxy(target, handler);
```

Usage example - to hide private members:
```js
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
```

Usage example - validation:
```js
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
```

Revocable proxies:
```js
const target = {};
const handler = {};
const {proxy, revoke} = Proxy.revocable(target, handler);

proxy.foo = 'bar';
console.log(proxy.foo); // "bar"

revoke();
console.log(proxy.foo); // throws Error
```

[Prev](17-WeakSet.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](19-modules.md)
