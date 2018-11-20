const $ = require('jquery')
import Person from './modules/Person'

class Adult extends Person {
  getTaxes() {
    return `Taxes : 100`
  }
}

const john = new Person('John Smith', 'red')
console.log(john.greet())

const lisa = new Adult('Lisa Meier', 'blue')
console.log(lisa.getTaxes())

$('h1').remove()
