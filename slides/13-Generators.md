[Prev](12-Promises.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](14-Maps.md)

### Generators

Base usage:
```js
function* genFunc() {
    console.log('First');
    yield; // (A)
    console.log('Second'); // (B)
}
let genObj = genFunc();
genObj.next()
// Output First
// Return { value: undefined, done: false }
genObj.next()
// Output Second
// Return { value: undefined, done: true }
```

**Usages**

1. Iterators (data producers)
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

2. Observers (data consumers)
```js
let fileName = process.argv[2];
readFile(fileName, chain(splitLines, numberLines, printLines));

function chain(...generatorFuncs) {
    if (generatorFuncs.length < 1) {
        throw new Error('Need at least 1 argument');
    }
    let generatorObject = generatorFuncs[generatorFuncs.length-1]();
    generatorObject.next();
    for (let i=generatorFuncs.length-2; i >= 0; i--) {
        let generatorFunction = generatorFuncs[i];
        generatorObject = generatorFunction(generatorObject);
        generatorObject.next();
    }
    return generatorObject;
}
```

3. Coroutines (data producers and consumers)
```js
function getFile(url) {
    return fetch(url).then(request => request.text());
}

function co(genFunc) {
    let genObj = genFunc();
    run();

    function run(promiseResult = undefined) {
        let item = genObj.next(promiseResult);
        if (!item.done) { 
            item.value.then(result => run(result)).catch(error => {
                genObj.throw(error);
            });
        }
    }
}
```

4. Bloking async calls with Promise and CO
```js
co(function* () {
    try {
        let [croftStr, bondStr] = yield Promise.all([  // (A)
            getFile('http://localhost:8000/croft.json'),
            getFile('http://localhost:8000/bond.json'),
        ]);
        let croftJson = JSON.parse(croftStr);
        let bondJson = JSON.parse(bondStr);

        console.log(croftJson);
        console.log(bondJson);
    } catch (e) {
        console.log('Failure to read: ' + e);
    }
});
```

[Prev](12-Promises.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](14-Maps.md)