const userModel=require("../models/userModel.js")

const createUser=async function(req,res){
    var data=req.body
    let saveData=await userModel.create(data)
    res.send({msg:saveData})
} 

const getUserData=async function(req,res){
    let allUsers=await userModel.find()
    res.send({msg: allUsers})
}
module.exports.createUser=createUser;
module.exports.getUserData=getUserData;