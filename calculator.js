const express = require("express");
const bodyParser = require("body-parser"); // body-parser to pass the http request

const app = express();
app.use(bodyParser.urlencoded({extended:true}));    //body-parser allows you to go in any of the routes.Posted from html form.To access the form data.Extended to post nested object.

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");  // file path for every server
});

app.post("/",function(req,res){
    var num1 = Number(req.body.n1);  // Explicitly turning into number
    var num2 = Number(req.body.n2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});

app.get("/bmiCalculator",function(req,res){        //Responding to get request.bmi calculator route
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator",function(req,res){  //Responding to post request.
    var weight = parseFloat(req.body.weight);  // Explicitly turning into float
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);
    res.send("Your BMI is " + bmi);
});
 
app.listen(3000,function(){
    console.log("Server is running on port 3000.");
});