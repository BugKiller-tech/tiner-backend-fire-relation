var express = require('express');
var router = express.Router();

var users = require('./users');
var things = require('./things');



router.use('/users', users);
router.use('/things', things);



router.get('/test-lang', (req, res) => {
  res.json({
    message: res.__('APP_NAME')
  })
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
