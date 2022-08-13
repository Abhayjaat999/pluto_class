
const { application } = require('express');
const express = require('express');
const router = express.Router();
const userModel = require("../models/userModel.js");
const userController=require("../controllers/userController.js");


router.get('/test-me', function (req, res) {
   res.send("hi ! My name is Abhay Singh")
});

router.post('/createUser', userController.createUser );
router.get('/getallUsers',userController.getUserData )

// router.post("/createUser",async function(req,res){
//   let data=req.body
//  let seveData=await userModel.create(data)
//   res.send({msg:saveData})
// })

module.exports = router; 