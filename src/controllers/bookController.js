const bookModel=require("../models/bookModel.js")

const createBook=async function(req,res){
    var data=req.body
    let saveData=await bookModel.create(data)
    res.send({msg:saveData})
} 

const getBookData=async function(req,res){
    let allBook=await bookModel.find()
    res.send({msg: allBook})
}
module.exports.createBook=createBook;
module.exports.getBookData=getBookData;