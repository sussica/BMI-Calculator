const express = require('express')
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({
  extended: true
}));
const port = 3000




app.get('/', (req, res) => res.sendFile(__dirname + "/bmiCalculator.html"))

app.post('/bmicalculator', (req, res) => {
  var height = req.body.height;
  var weight = req.body.weight;
  var result = weight / Math.pow(height, 2);


  if (isNaN(result)) {
    res.send("Please make sure your input number =)")
  } else res.send('Your BMI is ' + result);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
