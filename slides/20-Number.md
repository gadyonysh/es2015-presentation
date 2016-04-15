[Prev](08-Object.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](21-Math.md)

### Number

New static methods - are like their global namesakes:
```js
Number.isNaN(value);
Number.isFinite(value);
Number.parseInt('1');
Number.parseFloat('3.14');

const isNotANumber = Number.isNaN(Number.NaN);
console.log(isNotANumber); // true

const isInfinity = !Number.isFinite(Number.POSITIVE_INFINITY);
console.log(isInfinity); // true
```

New constants:
```js
Number.MAX_SAFE_INTEGER // the largest integer that can safely and precisely represented in JS
Number.MIN_SAFE_INTEGER // the smallest integer that can safely and precisely represented in JS
```

New static methods:
```js
Number.isInteger(1); // checks if arg is a number and doesn't have a decimal part
Number.isSafeInteger(1);
// is similar to Number.isInteger, also checks is input within Number.MIN_SAFE_INTEGER - Number.MAX_SAFE_INTEGER range
```

[Prev](08-Object.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](21-Math.md)