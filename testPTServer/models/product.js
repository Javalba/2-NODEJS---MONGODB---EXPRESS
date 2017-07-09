const mongoose = require('mongoose');

//uppercase convection
const Schema = mongoose.Schema;

const Review = require('./review'); // utilizo el esquema de review.

const productSchema = new Schema({
  name: String,
  price: Number,
  imageUrl: String,
  description: String,
  reviews: [Review.schema], //trading comma
});

const Product = mongoose.model('Product', productSchema);

//Exporto para que toda la aplicaicon pueda leerla.
//Lo tengo disponible en todos los require que haga de este fichero.
/*Te creas una clase y usas el patron de diseño singleton para poder inicializar*/
module.exports = Product;
