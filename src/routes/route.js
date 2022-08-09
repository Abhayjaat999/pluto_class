const express = require('express');
let app = express()
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { application } = require('express');
const router = express.Router();


router.get('/sol1', function (req, res) {
        var arr = [1, 2, 3, 5, 6, 7, 8];
        function findNumber(arr) {
        var n = arr.length;
        var total = ((n + 2) * (n + 1)) / 2;
        for (let i = 0; i < n; i++) {
            total -= arr[i];
        }
        return total;
        }

        let element=findNumber(arr)
        
   res.send({data : element})
});


router.get('/sol2', function (req, res) {
    let arr = [ 33, 34, 35, 37, 38];
    let place=arr.length
    
let total=0;
for(var i in arr){
  total +=arr[i];
}
let f=arr[0]
let l=arr.pop()
let sum=(place +1)*(f+l)/2
let numb=sum-total
 
res.send({data : numb})
});



module.exports = router;