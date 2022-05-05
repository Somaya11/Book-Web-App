const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    content: String,
    rating: {
    type: Number, 
    min: 1, 
    max: 5, 
    default: 5}
  }, {
    timestamps: true
  });
  
  const movieSchema = new Schema({

const bookSchema = new Schema({
    title: {
        type: String,
        required: true},

    author: {
        type: String,
         required: true},

    description: {
        type:String,
        required: true,
    
        reviews: [reviewSchema]
    }

    
        
})

module.exports = mongoose.model('Book', bookSchema)