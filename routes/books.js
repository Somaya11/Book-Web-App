var express = require('express');
var router = express.Router();

let booksCtrl = require('../controllers/books')


router.get('/',booksCtrl.index)

// Adding book 
router.get('/new', booksCtrl.new)

// creating the added book
router.post('/', booksCtrl.create)

// get movie id
router.get('/:id', booksCtrl.show)

module.exports = router;
