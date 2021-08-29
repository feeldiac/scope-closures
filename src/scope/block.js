const fruits = () => {
  if (true) {
    var fruit1 = 'apple';
    let fruit2 = 'banana'; //Sólo se accede dentro del bloque
    const fruit3 = 'kiwi'; //Sólo se accede dentro del bloque

    console.log(fruit2);
    console.log(fruit3);
  }

  console.log(fruit1);
};

fruits();

//Ejemplo 2
let x = 1;

{
  let x = 2;
  console.log(x); //Se toma la x dentro del bloque
}

console.log(x);

//Ejemplo 3
var x = 1;

{
  var x = 2;
  console.log(x); //Se modifica el valor global de x
}

console.log(x);

//Ejemplo 4
const anotherFunction = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }

  console.log(i * i);
};

/*
¿Por qué se muestra el último valor al usar 'var'?
1. Se declara una i con scope de función,
2. Cada iteración sobreescribe esa variable,
3. Los SetTimeOut se ejecutan con el último valor de i,
4. i vale 10 porque se valor se modificó (a nivel de fn) 
para evaluar la condición y los sto se ejecutan posteriormente.

¿Por qué se muestra correctamente con let?
let está enlazada con cada iteración del foor loop, por tanto
el sto tomará el valor de la variable en esa iteración.


*/
anotherFunction();
