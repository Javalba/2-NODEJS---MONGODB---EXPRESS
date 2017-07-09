const express = require('express');
const router = express.Router();

/* GET home page. */

const Product = require('../models/product'); //cargo el modelo Product
const Review = require('../models/review'); //cargo el modelo Review

/*List all products*/
router.get('/', (req, res, next) => {

  Product.find({}, (err, products) => {
    if (err) {
      //llamo al middleware de app.js que gestiona los errores.
      next(err);
    } else {
      console.log(products);
      //necesito enviarlo a la vista
      res.render('products/index', {
        products
      });
    }
  });
  //res.render('product', { title: 'Express' });
});

/*Create a new product with a form*/
router.get('/new', (req, res, next) => {
  res.render('products/new');
});

/*
Fetch form data
post --> fetch property body
*/
router.post('/', (req, res, next) => {
  const productInfo = {
    name: req.body.name,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    description: req.body.description
  };
  const newProduct = new Product(productInfo); // create a new instance with form data
  newProduct.save((err) => {
    if (err) {
      return next(err);
    } else {
      res.redirect('/products'); //vuelve a pedir la ruta que te estoy diciendo. Ruta absoluta.
    }
  });
});
/*
Fetch form data
post --> fetch property body
*/
router.get('/:id', (req, res, next) => {
  const productId = req.params.id;
  Product.findById(productId, (err, product) => {
    if (err) {
      next(err);
    } else {
      res.render('products/show', {
        product
      });
    }
  });
  //res.send(productId);
});

router.get('/:id/edit', (req, res, next) => {
  const productId = req.params.id;
  Product.findById(productId, (err, product) => {
    if (err) {
      next(err);
    } else {
      res.render('products/edit', {
        product
      });
    }
  });
});

/*Update product*/
router.post('/:id', (req, res, next) => {
  const productId = req.params.id;
  const updates = {
    name: req.body.name,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    description: req.body.description
  };
  Product.findByIdAndUpdate(productId, updates, (err, product) => { /**/
    if (err) {
      next(err);
    } else {
      res.redirect(`/products/${product._id}`);
    }
  });
});

/*Delete product*/
router.post('/:id/delete', (req, res, next) => {
  const productId = req.params.id;
  Product.findByIdAndRemove(productId, (err, product) => { /**/
    if (err) {
      next(err);
    } else {
      res.redirect(`/products`);
    }
  });
});

router.post('/:id/reviews', (req, res, next) => {
  const productId = req.params.id;

  Product.findById(productId, (err, product) => {
    const newReview = new Review({
      content: req.body.content,
      stars: req.body.stars,
      author: req.body.author
    });
    //console.log(`*****************${newReview}`);
    product.reviews.push(newReview);

    product.save((err) => { //lo guardo en el objeto de products
      res.redirect(`/products/${product._id}`);
    });
  });
});

/**
 * Search a product
 */
// router.get('/search', (req, res) => {
//   let query = req.query.searchTerm;
//
//   let queryRegex = new RegExp(query);
//   // We use a Regex here to find items that are similar to the search
//   // For instance if I searched "Yoga", I would then find the Yoga Mat
//   Product.find({ name: queryRegex }, (err, products) => {
//     if (err) { next(err) }
//     res.render('products/results', { products });
//   })
// });
module.exports = router; // exporta rutas para la variable de app.js
