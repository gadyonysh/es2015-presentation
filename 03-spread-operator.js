// ...[arr]

// Array concatenation
const arr = [1, 2, ...[3, 4], 5];
// arr is [1, 2, 3, 4, 5]
// [1, 2, ...(condition ? [3, 4] : []), 5]
// [1, 2, ...(condition ? [3, 4] : [3]), 5]

// Rest function params
fn(...[1, 2, 3]);
// equal to: fn(1, 2, 3)
// equal to: fn.apply(fn, [1, 2, 3])
// performance is better than with "arguments"

fn(first, second, ...third); // rest param have to be last in function definition

function concat(...words)
{
  return words.join();
}

// possible to combine "new" and rest params
const date = new Date(...dateArr);

otherFn(1, ...[2, 3], 4, ...[5, 6]);
arr.push(...otherArr);

// Cast array-likes or iterables to array
let images = [...document.querySelectorAll('img')];

// Destructing
const [first, , ...rest] = [1, 2, 3, 4, 5];
// first is 1, rest is [3, 4, 5]