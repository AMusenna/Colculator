

const express = require('express');
const bodyParser = require("body-parser");
const app = express();

const port = 3000

app.use(bodyParser.urlencoded({extended: true}));



app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res) {

  var selectedOne =Number(req.body.num1);
  var selectedTwo =Number(req.body.num2);

  var result = selectedOne + selectedTwo

res.send("Thanks for make an calculate your result is " + result);

});




app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + "/bmicalculator.html")
});

app.post("/bmicalculator", function(req, res) {

  var weight =parseFloat(req.body.weight1);
  var height =parseFloat(req.body.height1);

  var bmi = weight / ( height * height );

res.send("Thanks for make an BMI calculate your BMI is " + bmi);

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
