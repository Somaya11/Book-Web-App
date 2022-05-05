const book = require('../models/book')
const Book = require('../models/book')

module.exports = {
    new: newBook,
    create,
    index,
    show
}

//adding new book
function newBook(req, res){
    res.render('books/new')
}

// All wild book link
// function index(req, res){
//     Book.find({}, function(err, movies){
//         console.log(books)
//         res.send('okay')
//     } )
// }


// //ALl Wild Book link
function index(req, res){
    Book.find({}, function(err,books) {
        console.log(books)
        res.render('books/index', {books})
        
    })
    
}


function create(req, res) {
    const book = new Book(req.body);
    book.save(function(err) {
      
      if (err) { 
          console.log(err)
          return res.send(err);
        }
      console.log(book);
   
      res.redirect('/books');
    });
  }

function show(req, res){
 
 Book.findById(req.params.id, function(err, book) {
     console.log(book)
     res.json(book)
    //  res.render('book/show', { book })
 })
}