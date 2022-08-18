const bookModel=require("../models/bookModel.js")
const authorModel=require("../models/authorModel.js")

const createBook = async function (req, res) {
    let data = req.body;
    let savedData = await bookModel.create(data);
    res.send({ msg: savedData });
};
const createAuthor = async function (req, res) {
    let data = req.body;
    let savedData = await authorModel.create(data);
    res.send({ msg: savedData });
};


const authorAllBooks =async function(req,res){
    let myauthor= await authorModel.findOne( {authorName:"Chetan Bhagat"})
    console.log(myauthor);
    let allBooks= await bookModel.find({authorId:myauthor.authorId}).select({bookName:1})
    res.send({msg: allBooks})
}

const findAndUpdate =async function(req,res){
    let myBook= await bookModel.findOneAndUpdate( {bookName: "Two states"},{$set :{price: 150}},{new :true});
    console.log(myBook);
    let authorData= await authorModel.find({authorId:myBook.authorId}).select({authorName:1})
    res.send({msg: authorData })
}

const booksWithCosts =async function(req,res){
    
    let allBook=await bookModel.find({price:{ $lte: 50 /* , $lte: 250 */}}).select({authorId:1});
    var ask =allBook.map(x=> x.authorId);    
    console.log(allBook);
    let allAurthor=await authorModel.find({authorId:ask}).select({authorName:1});
    console.log(allAurthor);
    res.send({msg:allAurthor})

}
    
    module.exports.createBook=createBook
    module.exports.createAuthor=createAuthor
    module.exports.authorAllBooks=authorAllBooks
    module.exports.findAndUpdate=findAndUpdate
    module.exports.booksWithCosts=booksWithCosts





// const getParticularBooks = async function (req, res) {
//     let allBooks = await bookModel.find(req.body);
//     res.send({ msg: allBooks });
// };

// const getXINRBooks = async function (req, res) {
//     let allBooks = await bookModel.find({$or: [{ "prices.indian":{$eq: "1600INR"}},{ "prices.indian":{$eq: "1805INR"}}]});
//     res.send({ msg: allBooks });
// };

// const getRandomBooks = async function (req, res) {
//     let allBooks = await bookModel.find({ $or: [{ stockAvailable: true }, { pages: { $gt: 200 } }]});
//     res.send({ msg: allBooks });
// };

// const getAllBooks = async function (req, res) {
//     let allBooks = await bookModel.find( {authorName:"Ram Singh"});
//     console.log(allBooks);
//     if(allBooks) res.send({msg :allBooks,condition :true})

//    else res.send({ msg:"No books Found", condition:false });
// };

// const updateBooks = async function (req, res) {
//     let data = req.body;
//     let allBooks = await bookModel.updateMany(
//         {authorName:"Ram Singh"},{$set:data});
//     res.send({ msg: allBooks });
// };