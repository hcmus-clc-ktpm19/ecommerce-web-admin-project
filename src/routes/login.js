var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('auth/views/login', {layout: false});
});


module.exports = router;
