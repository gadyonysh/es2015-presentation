// ES2015 modules - files that export an API, declarations are scoped to that module

// strict mode is turned on by default inside module
// export statement - can only be placed at the module's top level

// export named bindings (not values!)
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



// export default binding
export default value; // just like "module.exports = value;" in commonjs - must be named

// we can also
export {one as default, two};

// recommended practice: use one export default in the end of module file:
const api = {
  foo: 'bar',
  bar: baz
};

export default api;


// import statements - as export statement - can only be placed at the module's top level

// in the simplest case - without variables creation - just will execute code in the top level of the imported module:
import './01-block-bindings';

// importing default exports :
import fileSystem from 'fs'; // "fileSystem" is just an alias for default binding

console.log(!!fileSystem); // true


// importing named exports
import {map, reduce} from 'lodash';

// we can use aliases for named bindings:
import {cloneDeep as clone, map} from 'lodash';

// combined example:
import {default, map} from 'lodash';
import {default as _, map} from 'lodash';
import _, {map} from 'lodash';

// to import everything (* must be followed by an alias):
/* myModule: */
export const one = 1;
const api = { foo: 'bar', bar: 'baz' };
export default api;

// importing everything from myModule:
import * as everything from 'myModule';

console.log(Object.keys(everything)); // ['one', 'default']

// Reexport:
export {cloneDeep as clone} from 'lodash';
export * from 'lodash';
