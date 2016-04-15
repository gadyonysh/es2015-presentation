// new methods:

// String.prototype.startsWith – whether the string starts with value
const str = 'Hello world';
const hello = 'Hello';
const world = 'world';

str.startsWith(hello) === (str.indexOf(hello) === 0);
str.startsWith(world, 6) === (str.splice(6).indexOf(world) === 0);

// String.prototype.endsWith – whether the string ends in value
str.endsWith(world) === (str.lastIndexOf(world) === str.length - world.length);
str.endsWith(hello, 5); // true

// String.prototype.includes – whether the string contains value anywhere
str.includes(hello) === (str.indexOf(hello) !== -1);
str.includes(hello, 3); // false

// String.prototype.repeat – returns the string repeated amount times
'!'.repeat(3);
(new Array(3 + 1)).fill('').join('!');

// String.prototype[Symbol.iterator] – lets you iterate over a sequence of unicode code points (not characters)
const text = 'foo';
for (let i = 0; i < text.length; i++)
{
  let codeUnit = text[i];

  console.log(codeUnit);
}

for (let codePoint of text) { console.log(codePoint); }


// better unicode (UTF-16) support - "\u{26203}" == "𦈃" vs "\u26203" === "☠3"

// String.prototype.codePointAt – base-10 numeric representation of a code point at a given position in string

// String.fromCodePoint – given ...codePoints, returns a string made of their unicode representations

// String.prototype.normalize – returns a normalized version of the string’s unicode representation