/**
 * Add initial products
 */
const mongoose = require(`mongoose`);
mongoose.connect(`mongodb://localhost:27017/lab-moviesDB`); //BBDDD que te quieres conectar: partTimeExample
const Celebrity = require(`../models/celebrity`); //especificas la coleccion product

const celebrities = [{
    name: `Jason Statham`,
    occupation: `actor`,
    catchPhrase: `I'm Jason fucking Statham`,
  },
  {
   name: `Vinnie Jones`,
    occupation: `actor`,
    catchPhrase: `I'm Vinne fucking Jones`,
  },
  {
   name: `Jason Flemyng`,
    occupation: `actor`,
    catchPhrase: `I'm Jason fucking Flemyng`,
  },
  {
   name: `Guy Ritchie`,
    occupation: `director`,
    catchPhrase: `I'm the director`,
  }
];

// docs --> callback result of create
// npm run seed
Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((e) => {
    console.log(e.name);
  });
  mongoose.connection.close();
});