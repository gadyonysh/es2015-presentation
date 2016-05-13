[Prev](10-Symbol.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](12-Promises.md)

### Iterators

Iterators description:
```js
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();
```

```js
iter.next()
// { value: 'a', done: false }
iter.next()
// { value: 'b', done: false }
iter.next()
// { value: 'c', done: false }
iter.next()
// { value: undefined, done: true }
```

#### Array:

```js
for (let x of ['a', 'b']) {
  console.log(x);
}
// Output:
// 'a'
// 'b'
```

#### Strings:

```js
for (let x of 'a\uD83D\uDC0A') {
  console.log(x);
}
// Output:
// 'a'
// '\uD83D\uDC0A' (crocodile emoji)
```

#### arguments:

```js
function printArgs() {
  for (let x of arguments) {
    console.log(x);
  }
}
printArgs('a', 'b');

// Output:
// 'a'
// 'b'
```

#### DOM

```js
for (let node of document.querySelectorAll('···')) {
  ···
}
```

#### For computed data

```js
let arr = ['a', 'b', 'c'];
for (let pair of arr.entries()) {
  console.log(pair);
}
// Output:
// [0, 'a']
// [1, 'b']
// [2, 'c']
```

```js
let obj = { a1: 'a', b1: 'b', c1: 'c'];
for (let [key, value] of obj.entries()) {
  console.log(pair);
}
// Output:
// ['a1', 'a']
// ['b1', 'b']
// ['c1', 'c']
```

```js
obj.keys()
obj.values()
obj.entries()
```

#### Promises

```js
  Promise.all(iterableOverPromises).then(···);
  Promise.race(iterableOverPromises).then(···);
```

#### Iterable interface and examples

```js
let iterable = {
    [Symbol.iterator]() {
        let step = 0;
        let iterator = {
            next() {
                if (step <= 2) {
                    step++;
                }
                switch (step) {
                    case 1:
                        return { value: 'hello', done: false };
                    case 2:
                        return { value: 'world', done: false };
                    default:
                        return { value: undefined, done: true };
                }
            }
        };
        return iterator;
    }
};
```

##### Combinators

```js
function take(n, iterable) {
    let iter = iterable[Symbol.iterator]();
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (n > 0) {
                n--;
                return iter.next();
            } else {
                return { done: true };
            }
        }
    };
}
let arr = ['a', 'b', 'c', 'd'];
for (let x of take(2, arr)) {
    console.log(x);
}
// Output:
// a
// b
```

##### Infinite

```js
function naturalNumbers() {
    let n = 0;
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            return { value: n++ };
        }
    }
}
```
[Prev](10-Symbol.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](12-Promises.md)
