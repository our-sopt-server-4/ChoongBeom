var express = require('express');
var router = express.Router();
let User = require('../models/users')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/signup', (req, res) => {
  const{id, name, password, email} = req.body;

  if(! id || !name || !password || !email){
    return res.status(400).send({message: 'BAD REQUEST'});
  }
  if( User.filter(user => user.id == id).length > 0){
    return res.status(400).send({message: 'ALREADY ID'});
  }

  User.push({id, name, password, email});
  res.status(200).send(User);
});

router.post('/signin', (req, res)=> {
  const {id, password} = req.body;
  const user = User.filter(user => user.id == id);

  if (user.length == 0){
    res.status(200).send("존재하는 아이디가 없음");
    return;
  }
  if(user[0].id == id && user[0].password == password){
    res.status(200).send("로그인이 되었습니다.");
    return;
  }
  res.status(200).send("뭐야압");
})

router.get('/profiles/:id', async(req, res) => {
  const uid = req.params.id;
  const user = User.filter(user => user.id == uid);
  return res.status(200).send(user);

});
module.exports = router;
