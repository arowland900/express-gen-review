var express = require('express');
var router = express.Router();
var todoDb = require('../models/todo')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('todos/index', {
    todos: todoDb.getAll()
  });
});

module.exports = router;
