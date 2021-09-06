var express = require('express');
var router = express.Router();
var config = require('../config/mongo-config');

router.get('/:username', function (req, res, next) {
    config.userCol().findOne({username: req.params.username})
        .then((users) => {
            res.json(users)
        });
});

router.get('/', function (req, res, next) {
    config.userCol().find().toArray()
        .then((users) => {
            res.json(users)
        });
});

router.post('/', function (req, res, next) {
    config.userCol().insertOne(req.body);
    res.json(req.body);
})

router.put('/:username', function (req, res, next) {
    config.userCol().findOneAndUpdate(
        {username: req.params.username},
        {
            $set: {
                username: req.body.username,
                password: req.body.password
            }
        });
    res.json(req.body);
})

router.delete('/:username', function (req, res, next) {
    config.userCol().findOneAndDelete({username: req.params.username});
    res.json(req.body);
})

module.exports = router;
