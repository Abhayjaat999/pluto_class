const bookModel=require("../models/bookModel.js")

const createBook = async function (req, res) {
    let data = req.body;
    let savedData = await bookModel.create(data);
    res.send({ msg: savedData });
};


const getAllBooks = async function (req, res) {
    let allBooks = await bookModel.find().select( {bookName: 1,authorName:1,_id:0});
    res.send({ msg: allBooks });
};

const getBooksInYear = async function (req, res) {
    let year = req.query.year;
    let allBooks = await bookModel.find({year:year});
    res.send({ msg: allBooks });
};

const getParticularBooks = async function (req, res) {
    let allBooks = await bookModel.find(req.body);
    res.send({ msg: allBooks });
};

const getXINRBooks = async function (req, res) {
    let allBooks = await bookModel.find({$or: [{ "prices.indian":{$eq: "1600INR"}},{ "prices.indian":{$eq: "1805INR"}}]});
    res.send({ msg: allBooks });
};

const getRandomBooks = async function (req, res) {
    let allBooks = await bookModel.find({ $or: [{ stockAvailable: true }, { pages: { $gt: 200 } }]});
    res.send({ msg: allBooks });
};
    module.exports.createBook=createBook;
    module.exports.getAllBooks =getAllBooks 
    module.exports.getBooksInYear=getBooksInYear
    module.exports.getParticularBooks=getParticularBooks
    module.exports.getXINRBooks=getXINRBooks
    module.exports.getRandomBooks=getRandomBooks
    



    // let allBook=await bookModel.find({authorName:"J. K. Rowling" }).count()
    // let allBook=await bookModel.find().sort({sales:-1}).limit(3).select({bookName: 1,autherName:1,_id:0}) 
    
    // Skip element
    // let allBook=await bookModel.find().sort({sales:-1}).skip(5).limit(3).select({bookName: 1,autherName:1,_id:0})

    // // Pagination
    // let page=req.query.page
    // let allBook=await bookModel.find().sort({sales:-1}).skip(3*(page-1)).limit(3)
    
    //  let allBook=await bookModel.find({authorName:{$eq:"J. K. Rowling"} })
     
    // let allBook=await bookModel.find({$and:[{sales:{$gt:20}},{sales:{$lt:100}}]}) //or
    // let allBook=await bookModel.find({sales:{$gt:20,$lt:100}}) 
