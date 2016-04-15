console.log(`Multiline
  string
    with spaces and \` "backticks"`);
/* Outputs:
 Multiline
 string
 with spaces and ` "backticks"
 */

// Interpolation:
const one = 1;
const three = () => 3;
console.log(`one: ${one}, two: ${1 + 1}, three: ${three()}`);
// Outputs: 'one: 1, two: 2, three: 3'

// JSX-like example:
let items = ['one', 'two', 'three'];
let html = `<h1>Items</h1>
<ul>
  ${items.map(item => `<li>${item}</li>`).join('\n  ')}
</ul>`;

// Tagged templates:
const firstName = 'Vladimir';
const lastName = 'Tazin';
const text = fn`First name is "${firstName}". Last name is "${lastName}".`;
/* Equal to:
 const text = fn(['First name is "', '". Last name is "', '".'], firstName, lastName);
 */

// Normal behavior:
const normal = (template, ...expressions) => template.reduce((accumulator, part, i) => accumulator + expressions[i - 1] + part);
// Outputs: 'First name is "Vladimir". Last name is "Tazin".'
const text = normal`First name is "${firstName}". Last name is "${lastName}".`;
console.log(text);
// Outputs: 'First name is "Vladimir". Last name is "Tazin".'

// Usage example:
const upperExpressions = (template, ...expressions) => template.reduce((accumulator, part, i) => accumulator + expressions[i - 1].toUpperCase + part);
const text = upperExpressions`First name is "${firstName}". Last name is "${lastName}".`;
console.log(text);
// Outputs: 'First name is "VLADIMIR". Last name is "TAZIN".'

// Raw templates:
console.log(String.raw`"\n" is not a new line here.
New line.`);
/* Outputs:
 "\n" is not a new line here.
 New line.

 It's like '@' in C#
 */