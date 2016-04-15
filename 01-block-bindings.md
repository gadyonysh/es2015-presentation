```js
// {} is a block: {{{let foo = 'foo';}}}

(function() {
  console.log(one); // undefined
  console.log(two); // reference error
  console.log(three); // reference error

  if (true)
  {
    console.log(one); // undefined
    console.log(two); // reference error
    console.log(three); // reference error

    var one = 1;
    let two = 2;
    const three = 3;

    let two = 4; // error
    const three = 4; // error
    three = 4; // error

    const four = {};
    four.one = 1;

    // error in ES5
    function fn() {}
    fn();

    class Foo
    {
      constructor() {}
    }

    const fooInstance = new Foo();
  }
  else
  {
    console.log(one); // undefined
    console.log(two); // reference error
    console.log(three); // reference error
  }

  console.log(one); // 1
  console.log(two); // reference error
  console.log(three); // reference error
})();
```

```js
console.log(foo); // undefined
console.log(bar); // reference error
console.log(baz); // reference error

var foo = 1;
let bar = 2;
const baz = 3;

console.log(foo in window); // true
console.log(bar in window); // false
console.log(baz in window); // false
```