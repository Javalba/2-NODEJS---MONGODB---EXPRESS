//static method is not neccesary instance an object to call a function
class Person {
  static sayHello() {
    console.log("hola");
  }

  sayBye() {
    console.log("bye");
  }
}

// let dog = new Person();
// dog.sayBye();
// Person.sayHello();
//
//
// setTimeout(sayHello(),  3000);
// setTimeout(() => console.log('function 2 - 1s'),  1000);
// setTimeout(() => console.log('function 3 - 2s'),  2000);
// console.log('function 4 - 0s');

//crea una funcion anonima que devuelve con el return.
// function sayHello(){
//   console.log("Hello");
//   var a = () => {
//     console.log(`Hola desde funcion`);
//   };
//   return a;
// }
//
//  let a = sayHello();
//  console.log("a",a());
// let foods = ["Pizza", "Ice Cream", "Salad", "Oranges", "Sushi"];
//
// let loudFoods = foods.map((e) => {
//   let upperCased = e.toUpperCase();
//   return upperCased + "!!!";
// });
//
// console.log(loudFoods);
//
// let smartPhones = [{
//     name: 'iphone',
//     price: 650
//   },
//   {
//     name: 'Galaxy S6',
//     price: 576
//   },
//   {
//     name: 'Galaxy Note 5',
//     price: 489
//   }
// ];
//
// console.log(smartPhones.map(
//   (e) => {
//     return e.price
//   }
// )); // [649, 576, 489]
//
// console.log(smartPhones.map(
// e => {return e.price+=10;}
// )); // [649, 576, 489]
//
// function holaMundo(callback){
//   console.log("HolaMundo");
//     return a = () => {
//       console.log(`Hola desde funcion`);
//     };
// }
//
// holaMundo()();


		insertUser( "pepe", (error, result)=> {
			if (error) {
				console.log(error);
			} else {
				console.log('Inserted: ',result);
			}
		});


// Insert a user
// user is the object to insert into the collection
// callback has two arguments error and result
function insertUser(user, callback = (error, result) => {})
{
  let error = false;
    if (error){
      callback(error);
    } else {
      // LAB 1
      // Implement the query to insert a user
      // user is the document that we want to insert
      // remeber once it's finish to comment callback('Error inserting user');

      callback(false,'PEPE');
    }
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



/*
Dentro de node corre express como servidor - Apache, ginx, Express (pequeño apache), escucha peticiones
Express montar un servidor que nos devuelve paginas web.
NodeJS es un interprete que puede leer express para poder comunicarse con el browser. Interpreta las peticiones de expres
y las manda al browser.
Express puede comunicarse con MongoDB pero utilizaremos mongoose para facilitar esa tarea
Con mongodb tienes que saber que tipo de peticiones vas a hacer para hacer el modulado de la bbdd.
Porque sino puede haber inconsistencia


Express
Pido una request devuelve un html. Me devuelve la seccion

nodemon sirve para reiniciar el server express automaticamente

ejsPermite organizar las templates como queramos

partials
header.ejs.


responser.render()
npm i --save-dev nodemon


HTTP REQUEST

GET : Obtener o enviar información

app.get('/form', () =>{

})

/*POSIBLES FORMAS DE LLAMAR A RES.RENDER*/
//res.send(`<p>${JSON.stringify(response.value)}</p>`);

/*Le paso el atributo joke a la vista*/
// .then((response) => {
//   let data = {
//     randomJoke: response.value
//   };
//
//   res.render("random", {
//   "joke": data.randomJoke // le paso atributo joke a la vista <p><%=joke %></p>
// });
//
// res.render("random", data); //le paso el objeto entero y por tanto su atributo será randomJoke  <p><%=randomJoke %></p>
//
// let joke2=response.value;
// res.render("random", {joke2}); //actua como si joke2 fuera el atributo y su valor es su contenido.  <p><%=joke2 %></p>

/*MONGOOSE*/
/**
 * npm run start
 */


 /*
 MAPS MONGOOSE
 Poligonos y multipoligonos.
 mongo necesita la estructura del GEOJSON
 
 // restaurant.js
const RestaurantSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
});
RestaurantSchema.index({ location: '2dsphere' });

en un post redirect

html.index - llamadas ajax le cargas el contenido

index.js - mediante json - 

controlador 

georeference pones direccion y te da lat y lon

 enctype="multipart/form-data"> en que forma envias los datos
 en la bbdd nos guardamos la ruta de la imagen
 se guardan en uploads

 heroku logs 
 
 .env fichero oculto no hay que subirlo. Variables de enterono ocultas, no son publicas

populate:
obtener los datos anidados de un esquema
id
name
stories:[1,2,3,4]

 */