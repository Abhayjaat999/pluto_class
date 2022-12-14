const express = require('express');
var bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://Abhay_Singh999:mXENB4Qbmy5FCTa5@cluster0.dcwiqaa.mongodb.net/ASK-002?retryWrites=true&w=majority",{
useNewUrlParser: true
}
).then( ()=> {console.log( "Mongo Dp is Successfully connected" )} )
.catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});