[Prev](18-Proxy.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](08-Object.md)

### Modules

ES2015 modules - files (or construction inside html script-tag) that export an API, declarations are scoped to that module

strict mode is turned on by default inside module

**Export statement** (can only be placed at the module's top level)

Export named bindings (not values!):
```js
export const foo = 'bar';
export let bar = 'baz';

const one = 1;
const two = 2;
export {one, two};

const first = '1st';
export {first as firstShort};

const second = '2nd';
export {first as firstShort, second};
export {first as firstShort, second as secondShort};
```

Export default binding
```js
export default value; // just like "module.exports = value;" in commonjs - must be named

// we can also
export {one as default, two};
```

Recommended practice: use one export default in the end of module file:
```js
const api = {
  foo: 'bar',
  bar: baz
};

export default api;
```

**Import statement** (as export statement - can only be placed at the module's top level)

In the simplest case - without variables creation - just will execute code in the top level of the imported module:
```js
import './01-block-bindings';
```

Importing default exports:
```js
import fileSystem from 'fs'; // "fileSystem" is just an alias for default binding

console.log(!!fileSystem); // true
```


Importing named exports:
```js
import {map, reduce} from 'lodash';

// we can use aliases for named bindings:
import {cloneDeep as clone, map} from 'lodash';
```

Combined example:
```js
import {default, map} from 'lodash';
import {default as _, map} from 'lodash';
import _, {map} from 'lodash';
```

To import everything (\* must be followed by an alias):
```js
// myModule
export const one = 1;
const api = { foo: 'bar', bar: 'baz' };
export default api;
```

Importing everything from myModule:
```js
import * as everything from 'myModule';

console.log(Object.keys(everything)); // ['one', 'default']
```

[Prev](18-Proxy.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](08-Object.md)