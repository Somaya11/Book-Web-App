const mongoose = require('mongoose')
const Schema = mongoose.Schema


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
    
        
    },
   
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
        
})



module.exports = mongoose.model('Book', bookSchema)