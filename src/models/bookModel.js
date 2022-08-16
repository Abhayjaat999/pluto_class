const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    bookName:String,
    authorName: String,
    category: String,
    category:{
        type:String,
        enum:["Nobal","Si-fi", "Horrer"]},
    year:Number,
    
},{timestamps:true});

module.exports =mongoose.model('books',bookSchema)