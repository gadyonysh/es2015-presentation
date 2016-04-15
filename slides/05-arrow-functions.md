[Prev](04-default-function-params.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](06-template-literals.md)

### Arrow functions

```js
const fn = () => value;
// equal to const fn = function() { return value; };

const sum = (first, second) => first + second;

const addTwo = value => value + 2;
// equal to const addTwo = function(value) { return value; };
```

we have to provide "return" statement when using block:
```js
const fn = param => {
  const something = getSomething();
  const preparedSomething = prepareSomething(something);

  return modifySomething(preparedSomething);
};
```

to return object in simple arrow function (because {} is block):
```js
const fn = param => ({ param: param });
```

Arrow functions don't have "name" property and context ("this" links to closest parent component with context):
```js
function Timer
{
  this.seconds = 0;
  setInterval(
    () => this.seconds++,
    1000
  );
}

const timer = new Timer();
setTimeout(() => console.log(timer.seconds), 4200); // 4
```

[Prev](04-default-function-params.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](06-template-literals.md)