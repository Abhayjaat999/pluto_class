
const { application } = require('express');
const express = require('express');
const router = express.Router();
const userModel = require("../models/userModel.js");
const userController=require("../controllers/userController.js");

const bookModel = require("../models/bookModel.js");
const bookController=require("../controllers/bookController.js");


router.get('/test-me', function (req, res) {
   res.send("hi ! My name is Abhay Singh")
});

// router.post('/createUser', userController.createUser );
// router.get('/getallUsers',userController.getUserData );

router.post('/createBook', bookController.createBook );
router.get('/getallBook',bookController.getBookData )


// router.post("/createUser",async function(req,res){
//   let data=req.body
//  let seveData=await userModel.create(data)
//   res.send({msg:saveData})
// })

module.exports = router; 