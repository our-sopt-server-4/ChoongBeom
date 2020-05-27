var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const jwt = require('../modules/jwt');

router.post('/signin', async (req, res) => {
  const {token, _} = await jwt.sign(user[0]);

  res.status(statusCode.OK)
  .send(util.success(statusCode.OK, resMessage.LOGIN_SUCCESS, {accessToken:token}));
});
module.exports = router;
