var express = require('express');
var router = express.Router();

router.get('/signin', (req, res) => {
    const result = {
        status: 200,
        message: 'login에 접근합니다.'
    }
    res.status(200).send(result);
});

router.get('/signup', (req, res) => {
    const result = {
        status: 200,
        message: 'signup에 접근합니다.'
    }
    res.status(200).send(result);
});

module.exports = router;