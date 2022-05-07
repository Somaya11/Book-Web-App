const Book = require('../models/book');

module.exports = {
  create,

}

function create(req, res) {
  
  Book.findById(req.params.id, function(err, book) {
    console.log(book)
    console.log(req.body)
 
    book.reviews.push(req.body)

    book.save(function(err, savedBook) {
      console.log(savedBook)
     
      res.redirect(`/books/${req.params.id}`)
    })
  })
}