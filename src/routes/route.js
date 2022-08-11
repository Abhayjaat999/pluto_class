const express = require('express');
let app = express()
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { application } = require('express');
const router = express.Router();

/*
router.get('/test-json', function (req, res) {
   res.send("hi ! My name is Abhay Singh")
});


router.get('/test-json', function (req, res) {
  res.send("I frome Sirsa (haryana)")
});

router.get('/test-json', function (req, res) {
  res.send("I done my B.tech in E.E.E.")
});

router.get('/test-json', function (req, res) {
  res.send("Now, I join Function Up")
});

router.get('/test-json', function (req, res) {
  res.send("I realy Injoy It")
});

///////////////////////////////post requst

router.get('/test-json', function (req, res) {
  res.send({a:14 ,b:420})
});

router.post('/test-post1', function (req, res) {

  let ele=req.body.element
  Array.push(ele)
  console.log(req.body);
  res.send({msg:arr, ststus:true})
});


*/


let player =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

   router.post('/players', function (req, res) {

    let ele=req.body
    for ( i=0 ; i<player.length;i++){
      let object=player[i];
      if(object.name==ele.name){
        res.send("players alredy Added in List")
        break;
      }

    }
    player.push(ele)
    
       res.send(  { data: player , status: true }  )
   })

   let players={
                "bookingNumber" : 1,
                "sportId": 1,
                "centerId": 17,
                "type": "private",
                "slot": '16286598000000',
                "bookedOn": '31/08/2021',
                "bookedFor": '01/09/2021'
              }
   router.post('/players/entery', function (req, res) {
    
    let newPlayer = req.body
    let newPlayersName = newPlayer.type
    let newPlayersId = newPlayer.bookingNumber
    let isNameRepeated = false

    // let players = players.find(players =>players.type == newPlayersName)

    for(let i = 0; i < players.length; i++) {
        if(players[i].type == newPlayersName && players[i].bookingNumber==newPlayersId) {
            isNameRepeated = true;
            break;
        }
    }

    //undefined is same as false/ a falsy value
    if (isNameRepeated) {
        // Player exists
        res.send("This player was already added!")
    } else {
        //New entry
        players.push(players)
        res.send({data:players})
    }
});


   router.get("/quary",function(req,res){
    let marks=req.query.marks
    let result=marks>35 ?"pass":"fail"

    res.send({data:data , stetus:true})
   })

   router.post("/post-quary",function(req,res){
    let data=req.quary
    console.log(data);
    res.send({data:data,status:true})
   })
   
   let arr=[12,54,84,75,62,14,67,95,457]
   router.post("/post-quary-2",function(req,res){
    let input=req.query.input
    let finalArr=[]
    for(i=0;i<arr.length;i++){
      if (arr[i]>input)
      finalArr.push(arr[i])
    }
    res.send({data:finalArr,status:true})
  })


module.exports = router;