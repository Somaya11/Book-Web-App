var express = require('express');
var router = express.Router();

let booksCtrl = require('../controllers/books')

// const multer = require("multer");
// const upload = multer({ dest: 'uploads/'});


// const uploadCtrl = require('../controllers/upload' )

router.get('/',booksCtrl.index)

// Adding book 
router.get('/new', booksCtrl.new)

// creating the added book
router.post('/', booksCtrl.create)

// get movie id
router.get('/:id', booksCtrl.show)

router.delete('/:id', booksCtrl.delete)

router.get('/:id/edit', booksCtrl.edit);

router.put('/:id', booksCtrl.update)


// router.post('/upload', upload.single('image'), uploadCtrl.upload)

module.exports = router;
