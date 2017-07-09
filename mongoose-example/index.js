const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/partTimeExample'); //BBDDD que te quieres conectar: partTimeExample

/*Hay que especificar esquema de cada documento.
Esquema --> representacion de cada documento.
*/
const Cat = mongoose.model('Cat', {
  name: String
}); //Cat nombre de la coleccion. Modelo en singular. Modelos en plural
/*Creamos un objeto de tipo Cat*/
const kitty = new Cat({
  name: 'Java'
});

//DOC --> http://mongoosejs.com/docs/api.html#model-js
//Cat usa mongodriver para conectarse a la BBDD
kitty.save((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`OK`);
    /*Si lo pusiera separado la accion del save (escritura) tarda mas que find (lectura)
    Lo metemos dentro del callback de save para asegurarnos de que
    primero haga el save y cuando haya acabado ejecute el
    */
    Cat.find({}, (err, datos) => {
      if (err) {
        console.log(err);
      } else {
    console.log(`Datos${datos}`);
      }
    });
  }
});
