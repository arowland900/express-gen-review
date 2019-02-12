var express = require('express');
var router = express.Router();
var Todo = require('../models/todo')
var todosController = require('../controllers/todos')

/* GET users listing. */
router.get('/', todosController.index);

module.exports = router;
