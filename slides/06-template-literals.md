[Prev](05-arrow-functions.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](07-object-literals.md)

### Template literals

```js
console.log(`Multiline
  string
    with spaces and \` "backticks"`);
/* Outputs:
Multiline
  string
    with spaces and ` "backticks"
*/
```

Interpolation:
```js
const one = 1;
const three = () => 3;
console.log(`one: ${one}, two: ${1 + 1}, three: ${three()}`);
// Outputs: 'one: 1, two: 2, three: 3'
```

JSX-like example:
```js
let items = ['one', 'two', 'three'];
let html = `<h1>Items</h1>
<ul>
  ${items.map(item => `<li>${item}</li>`).join('\n  ')}
</ul>`;
```

Tagged templates:
```js
const firstName = 'Vladimir';
const lastName = 'Tazin';
const text = fn`First name is "${firstName}". Last name is "${lastName}".`;
/* Equal to:
 const text = fn(['First name is "', '". Last name is "', '".'], firstName, lastName);
 */
```

Normal behavior:
```js
const normal = (template, ...expressions) => template.reduce(
    (accumulator, part, i) => accumulator + expressions[i - 1] + part
  );
const text = normal`First name is "${firstName}". Last name is "${lastName}".`;

console.log(text);
// Outputs: 'First name is "Vladimir". Last name is "Tazin".'
```

Usage example:
```js
const upperExpressions = (template, ...expressions) => template.reduce(
    (accumulator, part, i) => accumulator + expressions[i - 1].toUpperCase + part
  );
const text = upperExpressions`First name is "${firstName}". Last name is "${lastName}".`;
console.log(text);
// Outputs: 'First name is "VLADIMIR". Last name is "TAZIN".'
```

Raw templates:
```js
console.log(String.raw`"\n" is not a new line here.
New line.`);
/* Outputs:
 "\n" is not a new line here.
 New line.

 It's like '@' in C#
 */
```

[Prev](05-arrow-functions.md) | [Table of contents](https://github.com/gadyonysh/es2015-presentation#ecmascript-2015) | [Next](07-object-literals.md)