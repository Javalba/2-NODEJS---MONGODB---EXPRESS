//static method is not neccesary instance an object to call a function
class Person {
  static sayHello() {
    console.log("hola");
  }

  sayBye(){
    console.log("bye");
  }
}

let dog = new Person();
dog.sayBye();
Person.sayHello();


setTimeout(sayHello(),  3000);
setTimeout(() => console.log('function 2 - 1s'),  1000);
setTimeout(() => console.log('function 3 - 2s'),  2000);
console.log('function 4 - 0s');

//crea una funcion anonima que devuelve con el return.
function sayHello(){
  console.log("Hello");
  let a = () => {
    console.log(`Hola desde funcion`);
  };
  return a;
}

//lLama dos veces a la funcion. Primero impremo
// function sayHello(){
//   console.log("Hello");
//   let a = () => {
//     console.log(`Hola desde funcion`);
//   };
//   return a;
// }
// sayHello()();

//Person.sayHello();
