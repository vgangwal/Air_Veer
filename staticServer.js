var express = require('express')
var app = express()
var l = require("lyric-get");
var p4k = require('pitchfork');

var s = new p4k.Search('beatles');

var whiteAlbumSongs = [
  {name: "Happiness is a Warm Gun",
  lyrics: "yadda yadda yadda"
  },
  {name: "Blackbird",
  lyrics: "Blaaaaaackbirrrrrrd, into the something something somethingggggg"}
];

var beatlesAlbums = [
  {title: "The Beatles (White Album)", year: 1968, rating: 10, tracklist: whiteAlbumSongs},
  {title: "Sgt. Pepper", year: 1967, rating: 10, tracklist: undefined}
];

app.use(express.static('Public'))

// make another endpoint to execute this
// make front-end response to this endpoint
// will serve up whatever is in res.send
// endpoint should describe the intent
// ex: post request - I am putting something into persistent data
// get request: I am getting data

//


app.get('/api/albums', function (req, res) {
  l.get("The Beatles", "Happiness is a Warm Gun", function(err, lyrics){
    if(err){
        console.log(err);
    }
    else{
        console.log(lyrics);
        res.send(lyrics);
    }
  });
  // res.send('Hello World!')
  // request.get('https://api.spotify.com/v1/albums/{id}').on('response', function(response) {
  //   console.log(response.statusCode) // 200
  //   console.log(response.headers['content-type']) // 'image/png'
  //   res.send(response)
  // })
  res.send(beatlesAlbums)
})

s.on('ready', function(results){
  var albums = [];
  for (var i = 0; i < results.length; i++) {
    albums.push({
      title: results[i].attributes.album,
      year: results[i].attributes.year,
      rating: results[i].attributes.score
    });
  }
  console.log(albums);
  // console.log("results of first review", results[0].attributes)
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})