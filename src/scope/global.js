//Al declararse fuera de una función,
//se puede acceder desde cualquier parte del programa

var hello = 'Hello';
let world = 'Hello world';
const helloWorld = 'Hello world!';

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
};

anotherFunction();

//Creando var global dentro de una función
const helloWorld = () => {
  globalVar = `I'm global`;
};

helloWorld();
console.log(globalVar);

//Creando var global dentro de una función
// !Mala Práctica
const anotherFunction = () => {
  var localVar = (globalVar = `'I'm globlal`);
};

anotherFunction();
console.log(globalVar);
