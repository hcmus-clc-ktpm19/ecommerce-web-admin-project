var express = require('express');
var router = express.Router();

/* GET admin add. */
router.get('/', function(req, res, next) {
    res.render('admin/views/add_admin');
});


module.exports = router;
