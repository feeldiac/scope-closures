const helloWorld = () => {
  const hello = 'Hello';
  console.log(hello);
};

helloWorld();
// console.log(hello);      No se tiene acceso a la variable local

var scope = 'I am global';

const functionScope = () => {
  var scope = 'I am just a local var'; //Se imprime la variable del ámbito más cercano
  const func = () => {
    return scope;
  };
  console.log(func());
};

functionScope();
