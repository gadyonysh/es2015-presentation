### Default function params

[Prev](03-spread-operator.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](05-arrow-functions.md)

```js
function useDefaultArg(arg = 'arg') {}
// equal to: arg = (typeof arg === 'undefined') ? 'arg' : arg;
// or less strict: arg = arg || 'arg';
```

we can use expressions as default args:
```js
function getThree() { return 3; }
function useExpressionsAsDefaultArg(num = 5 + getThree()) { return num; }
```

any arg can have default value:
```js
function useDefaultParamForAnyArg(first, second = 2, third) {}
```

we can use prev. args in default values (TDZ):
```js
function usePrevArgAsDefaultValue(
  first,
  second = first,
  third = getSmth(second),
  fourth = fifth/*error*/,
  fifth
) {}
```

[Prev](03-spread-operator.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](05-arrow-functions.md)