var express = require('express')
var app = express()
var l = require("lyric-get");

app.use(express.static('Public'))

app.get('/', function (req, res) {
  l.get("The Beatles", "Happiness is a Warm Gun", function(err, res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res);
    }
  });
  res.send('Hello World!')
})

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})