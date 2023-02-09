class Person {
  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    return `My name is ${this.name}.`;
  }
}

class Professor extends Person {
  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  grade(paper) {
    // implementasi untuk menilai sebuah paper
  }

  introduceSelf() {
    return `My name is Professor ${this.name} and I will be teaching ${this.teaches}.`;
  }
}

class Student extends Person {
  constructor(name, year) {
    super(name);
    this.year = year;
  }

  introduceSelf() {
    return `My name is ${this.name} and I am a ${this.year}-year student.`;
  }
}

const john = new Person("John");
console.log(john.introduceSelf());
// Output: My name is John.

const jane = new Professor("Jane", "Computer Science");
console.log(jane.introduceSelf());
// Output: My name is Professor Jane and I will be teaching Computer Science.

const tom = new Student("Tom", "Senior");
console.log(tom.introduceSelf());
// Output: My name is Tom and I am a Senior-year student.
