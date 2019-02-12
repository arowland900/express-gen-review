var express = require('express');
var router = express.Router();
// var Todo = require('../models/todo')
var todosController = require('../controllers/todos')

/* GET users listing. */
router.get('/', todosController.index);
router.get('/:id', todosController.show);

module.exports = router;
