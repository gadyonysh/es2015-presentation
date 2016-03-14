const fn = () => value;
// equal to const fn = function() { return value; };

const sum = (first, second) => first + second;

const addTwo = value => value + 2;
// equal to const addTwo = function(value) { return value; };

// we have to provide "return" statement when using block:
const fn = param => {
  const something = getSomething();
  const preparedSomething = prepareSomething(something);

  return modifySomething(preparedSomething);
};

// to return object in simple arrow function:
const fn = param => ({ param: param });