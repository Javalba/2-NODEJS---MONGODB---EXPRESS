/**
 * How to create express routes:
 * app.Require top
 */
const express = require('express');
const expressLayouts = require('express-ejs-layouts');


const app = express();
//layouts
app.use(express.static('public'));
app.use(expressLayouts);
app.set('layout', 'layouts/main'); // initial
app.set('views', __dirname + '/views'); //engine de js
app.set('view engine', 'ejs'); //

//myMiddleware
// function myMiddleware(){
//   console.log("middleware");
// }


//ejs
app.get('/', (request, response, next) => {
  // const namee ='Ironhackers';
  // response.render('index',{name: namee});
  // OR
  const name ='Ironhackers';
  const cities = ['BCN','MAD'];
  response.render('index',{name,cities});
});


// our first Route
app.get('/', (request, response, next) => {
  console.log(request);
  response.send(`<p>Welcome Ironhacker. :)</p>`); // request server to client
});

app.get('/home',(req,res,next)=>{
  let text = "Estoy en homee";
  console.log(`${text}`);
  res.send(`req: ${text}`); // puedo meter lo que quiera, un index con trozos de html
});

app.get('/about',(req,res,next)=>{
  let text = "Estoy en about";
  console.log(`${text}`);
  res.send(`req: ${text}`);
});

app.get('/form', () =>{
  res.render('form');
});

app.post('/',(req,res,next)=>{
  console.log('req',req);
  res.
});

//Request es la peticion que llega del browser
//Como hacemos un metodo get. Con un hipervinculo. postman
//router,proveedor internet,dns,ip,llama al dominio donde esta alojado ese server.
//los datos viajan en el body.
//express no te lee los datos del body, para eso hay que instalar un paquete adicional.
//metodo query, cuando lo pasas por parametros del get. &name=hola --> query={name=hola}
//paginacion: limit:10&ffset:2


// Server Started
//request html port 80
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
