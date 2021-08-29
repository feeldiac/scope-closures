const fruits = () => {
  var fruit = 'apple';
  console.log(fruit);
};

fruits();
//console.log(fruit);    fruit tiene scope de función/local

const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  //   let y = 2;    let y const no se pueden redeclarar en scope fn/block
  console.log(x);
  console.log(y);
};

anotherFunction();
