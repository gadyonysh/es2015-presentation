[Prev](12-Promises.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](14-Maps.md)

### Generators

Base usage:
```js
function* genFunc() {
    console.log('First');
    yield;
    console.log('Second');
    yield 1;
    console.log('Third');
    let result = yield 2;
    console.log('Finish');
    return result + 1;
}
let genObj = genFunc();
genObj.next()
// Output: First
// Return { value: undefined, done: false }
genObj.next()
// Output: Second
// Return { value: 1, done: false }
genObj.next()
// Output: Third
// Return { value: 2, done: false }
genObj.next(2)
// Output: Third
// Return { value: 3, done: true }
```

#### Two important applications of generators are:

* Implementing iterables
* Blocking on asynchronous function calls

##### Usages

```
genObj.next(arg)
genObj.throw(error)
genObj.return(value)
```

##### Interables

```js
function* objectEntries(obj) {
    let propKeys = Reflect.ownKeys(obj);

    for (let propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}

let jane = { first: 'Jane', last: 'Doe' };
for (let [key,value] of objectEntries(jane)) {
    console.log(`${key}: ${value}`);
}
// Output:
// first: Jane
// last: Doe
```

```js
// BinaryTree
class BinaryTree {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    * [Symbol.iterator]() {
        yield this.value;
        if (this.left) { yield* this.left; }
        if (this.right) { yield* this.right; }
    }
}

let tree = new BinaryTree('a',
    new BinaryTree('b',
        new BinaryTree('c'),
        new BinaryTree('d')),
    new BinaryTree('e'));

for (let x of tree) {
    console.log(x);
}
// Output:
// a
// b
// c
// d
// e
```

##### Blocking on asynchronous function calls

```js
function* showUserAvatar() {

  let userFetch = yield fetch('/article/generator/user.json');
  let userInfo = yield userFetch.json();

  let githubFetch = yield fetch(`https://api.github.com/users/${userInfo.name}`);
  let githubUserInfo = yield githubFetch.json();

  let img = new Image();
  img.src = githubUserInfo.avatar_url;
  img.className = "promise-avatar-example";
  document.body.appendChild(img);

  yield new Promise(resolve => imageObj.addEventListener('load', resolve, false) );

  img.remove();

  return img.src;
}

function execute(generator, yieldValue) {
  let next = generator.next(yieldValue);
  if (!next.done) {
    next.value.then(
      result => execute(generator, result),
      err => generator.throw(err)
    );
  } else {
    alert(next.value);
  }
}

execute( showUserAvatar() );
```

[Prev](12-Promises.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](14-Maps.md)