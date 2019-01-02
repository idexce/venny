//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/node', function (req, res) {
  res.send('Hello!')
})

app.get('/application', function (req, res) {
  res.send('Hello app....!!!!!')
})

//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})
