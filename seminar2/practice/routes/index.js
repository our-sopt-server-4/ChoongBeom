var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/api', require('./api'));
router.use('/api/blog/post', require('./api/blog/post'))
router.use('/api/user/login', require('./api/user/login'))
router.use('/api/user/signup', require('./api/user/signup'))


module.exports = router;
