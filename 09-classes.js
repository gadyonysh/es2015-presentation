// classes are just syntactic sugar for prototypal inheritance
// class has no non-static props
class Foo extends Proto
{
  constructor(bar) {
    super(bar); // base constructor
    // do things to construct object:
    this.baz = 'baz';
  }

  getBaz() {
    return this.baz;
  }

  getBar() {
    return super.getBar();
  }
}

// or even:
const methodName = 'getBaz';
const Foo = class
{
  constructor(baz) {
    this.baz = baz;
  }

  static isFoo() {
    return true;
  }

  [methodName]() {
    return this.baz;
  }
};

// getters & setters
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // setter
  set fullName(newValue) {
    [this.firstName, this.lastName] = newValue.split(' ');
  }

  // constant
  static get nameMaxLength() {
    return 255;
  }
};


// abstract class (using new.target metaproperty)
class Smth {
  constructor() {
    if (new.target === Smth) {
      throw new Error('Smth is abstract.');
    }
  }
}

// it's possible to extend built-in objects (HtmlElement, Array, Date etc)
// but it's only partially supported by transpilers (eg Babel can't extend Array, Date etc but it's ok for HtmlElement)
class WaArray extends Array
{
  constructor(...args)
  {
    super(...args);
  }
  
  size()
  {
    return this.length;
  }
}