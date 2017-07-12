const express = require('express');
const router = express.Router();

/* GET celebrities listing. */

const Celebrity = require('../models/celebrity');
console.log(`require`);

/*List all celebs*/
router.get('/', (req, res, next) => {

console.log(`dentro de la funcion`);
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
module.exports = router;
