var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog('Khang');
var tom = new Cat();
var mickey = new Mouse('Mickey');

try {
	tom.eat(dog);
} catch(err) {
	console.log('Error while cat eating a dog');
}

console.log(tom);