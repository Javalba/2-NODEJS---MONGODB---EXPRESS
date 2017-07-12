const express = require('express');
const router = express.Router();

/* GET celebrities listing. */

const Celebrity = require('../models/celebrity');
console.log(`require`);

/*List all celebs*/
router.get('/', (req, res, next) => {

    Celebrity.find({}, (err, celebs) => {
        if (err) {
            next(err); //middleware errors
        } else {
            console.log(celebs);
            //necesito enviarlo a la vista
            res.render('celebrities/index', {
                celebs //'celeb' go to view as a param
            });
        }
    });
});



/*Create a new celeb with a form*/
router.get('/new', (req, res, next) => {
    console.log("ssssssssssssssssssssss");
  res.render('celebrities/new');
});

router.post('/',(req,res,next) => {
    let celebInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
let newCeleb = new Celebrity(celebInfo);

  newCeleb.save((err) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/celebrities');
    }
  });
});
router.get('/:id', (req, res, next) => {
    let celebId = req.params.id;
    //celeb es el resultado del callback de findById
    Celebrity.findById(celebId, (err, celeb) => {
        if (err) {
            next(err);
        } else {
            console.log(celeb);
            res.render('celebrities/show', {
                celeb
            });
        }
    });
});

/*List one celebrity*/


module.exports = router;
