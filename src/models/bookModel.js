const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    bookName:String,
    authorName: String,
    category:{ type:String, enum:["Nobal","Si-fi", "Horrer"]},
    year:Number,
    totalPages:Number,
    tags : [String],
    date:{ type:Date, default: Date.now },
    stockAvailable:Boolean,
    prices:{indian:String, european:String},
    
    sales:{type: Number, default:20}

},{timestamps:true});

module.exports =mongoose.model('books',bookSchema)
