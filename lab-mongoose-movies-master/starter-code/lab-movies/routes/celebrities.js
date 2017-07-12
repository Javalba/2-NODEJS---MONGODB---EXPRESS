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


/*List one celebrity*/
router.get('/:id', (req, res, next) => {
    const celebId = req.params.id;
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


module.exports = router;
