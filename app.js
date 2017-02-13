const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

app.set('view engine', 'html')
app.use(express.static(path.join(__dirname, 'webBrow')))

app.listen(PORT, function(){
  console.log('app listening on port 3000')
})
app.get('/', function(request, response){
  console.log('here')
  response.sendFile('/Users/abrahamferguson/Projects/calcBenchmark/webBrow/index.html')
})
