[Prev](20-Number.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](22-Array.md)

### Math

New methods:
```js
Math.sign(value); // returns a vector like -1, 0 or 1 depending on the input sign
console.log(Math.sign(10), Math.sign(0), Math.sign(-0), Math.sign(-10), Math.sign(Number.NaN), Math.sign('foo'));
// outputs: 1, 0, -0, -1, NaN, NaN
```

```js
Math.trunc(value); // gets integer part of a number
console.log(Math.trunc(42.42), Math.trunc(-42.42), Math.trunc(-.42), Math.trunc(Number.NaN), Math.trunc('foo'));
// outputs: 42, -42, -0, NaN, NaN
```

```js
Math.cbrt(8); // returns cubic root of value - 2 in this case
```

```js
Math.log1p(value); // the natural logarithm of value plus 1 (the base "e" logarithm of a value + 1)
// is like
Math.log(value + 1);
// but is more precise
```

and its inverse function:
```js
Math.expm1(value);
// is like
Math.pow(Math.E, value) - 1;
// or
Math.exp(value) - 1;
// but has higher precision
```

```js
// Base 10 logarithm of a number
Math.log10(1000); // 3
// is like:
Math.log(1000) / Math.LN10;
```

```js
// Base 2 logarithm of a number:
Math.log2(1024); // 10
// is like:
Math.log(1024) / Math.LN2;
// but has higher precision in most cases
```

And 9 more methods:
```js
Math.sinh // – hyperbolic sine of a number
Math.cosh // – hyperbolic cosine of a number
Math.tanh // – hyperbolic tangent of a number
Math.asinh // – hyperbolic arc-sine of a number
Math.acosh // – hyperbolic arc-cosine of a number
Math.atanh // – hyperbolic arc-tangent of a number
Math.hypot // – square root of the sum of squares
Math.clz32 // – leading zero bits in the 32-bit representation of a number
Math.imul // – C-like 32-bit multiplication
Math.fround // – nearest single-precision float representation of a number
```

[Prev](20-Number.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](22-Array.md)