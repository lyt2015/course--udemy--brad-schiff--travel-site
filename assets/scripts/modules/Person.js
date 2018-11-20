class Person {
  constructor(name, favColor) {
    this.name = name
    this.favColor = favColor
  }

  greet() {
    return `Hello, my name is ${this.name} and my favorite color is ${this.favColor}.`
  }
}

export default Person
