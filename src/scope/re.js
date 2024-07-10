var firstName;  // Undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = 'David'; // declarar / asignar
lastName = 'Ana'; // reasignar
console.log(lastName);

var secondName = 'David'; // declarando / asignando
var secondName = 'Ana'; // reasignado
console.log(secondName);

// Let
let fruit = 'Apple' // declara y asginar
fruit = 'Kiwi'; // reasignar
console.log(fruit);

let fruit = 'Banana';
console.log(fruit);
//No se puede declarar porque ya existe

// Const
const animal = 'dog'; // declara y asigna
animal = 'cat'; // reasignado
const animal = 'Snake';
console.log(animal);
//las varaibles creadas con const no se pueden reasignar

const vehicles = [];
vehicles.push('🚗');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
//En el caso de los arreglos es algo distinto