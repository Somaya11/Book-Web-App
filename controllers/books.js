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
    res.render('books/new', { title: 'Add Book'})
}


function show(req, res){
 Book.findById(req.params.id, function(err, book) {
       // res.json(book)
       res.render('books/show', { title: 'Book Detail', book })
    })
   }

// //ALl Wild Book link
function index(req, res){
    Book.find({}, function(err,books) {
        console.log(books)
        res.render('books/index', {title: 'All Books', books})
        
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
