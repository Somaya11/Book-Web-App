const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    content: String,
    rating: {
    type: Number, 
    min: 1, 
    max: 5, 
    default: 5},
    book: { type: Schema.Types.ObjectId, ref: 'Book' }
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Review', reviewSchema)