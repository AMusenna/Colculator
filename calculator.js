

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
