const mongoose=require('mongoose');


const bookSchema=new mongoose.Schema({
    bookName:String ,
    authorId : Number,
    price : Number ,
    ratings : Number
},{timestamps:true});

module.exports =mongoose.model('book',bookSchema)
