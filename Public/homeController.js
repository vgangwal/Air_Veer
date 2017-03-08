var homeApp = angular.module('homeModule', [])
  .controller('homeCtlr', ['$scope', function($scope) {    
    var lyrics = ''
    
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

    $scope.pantheon = [
      {name: "The Beatles", albums: beatlesAlbums},
      {name: "Kanye West", albums: undefined}
    ];
    
    $scope.artist;
    $scope.albums;
    $scope.showArtistAlbums = false;
    $scope.toggleArtistAlbums = function() {
      $scope.showArtistAlbums = !$scope.showArtistAlbums;
    }
    $scope.setArtistAlbums = function(artist) {
      $scope.artist = artist;
      $scope.albums = artist.albums;
      $scope.toggleArtistAlbums();
      if ($scope.showAlbum) {
        $scope.showAlbum = false;
      }
      if ($scope.showSong) {
        $scope.showSong = false;
      }
      if ($scope.showLyrics) {
        $scope.showLyrics = false;
      }
    }

    $scope.album;
    $scope.showAlbum = false;
    $scope.toggleAlbum = function() {
      $scope.showAlbum = !$scope.showAlbum;
    }
    $scope.setAlbum = function(album) {
      $scope.album = album;
      $scope.toggleAlbum();
      if ($scope.showSong) {
        $scope.showSong = false;
      }
      if ($scope.showLyrics) {
        $scope.showLyrics = false;
      }
    }

    $scope.song;
    $scope.showSong = false;
    $scope.toggleSong = function() {
      $scope.showSong = !$scope.showSong;
    }
    $scope.setSong = function(song) {
      $scope.song = song;
      $scope.toggleSong();
    }

    $scope.lyrics;
    $scope.showLyrics = false;
    $scope.toggleLyrics = function() {
      $scope.showLyrics = !$scope.showLyrics;
    }
    $scope.setLyrics = function(song) {
      console.log('are lyrics being set?')
      if (($scope.song.lyrics !== $scope.lyrics) && $scope.showLyrics) {
        console.log('first one?')
        $scope.lyrics = $scope.song.lyrics;
      } else if ((song.lyrics === $scope.lyrics) && $scope.showLyrics) {
        console.log('second one?')
        $scope.toggleLyrics();
      } else {
        console.log('third one?')
        console.log($scope.showLyrics);
        $scope.lyrics = $scope.song.lyrics;
        $scope.toggleLyrics();
        console.log($scope.showLyrics);
      }
    }
  }]);

// var PANTHEON = [{artist: "The Beatles"}, "Kanye West", "Tame Impala", "Radiohead", "Frank Ocean", "The XX", "Kendrick Lamar", "Coldplay", "Beyonce", "Sam Cooke", "Marvin Gaye", "R. Kelly"];
//   var WHITE_ALBUM = {
//     artist: "The Beatles",
//     title: "The Beatles (White Album)",
//     year: 1968,
//     rating: 10,
//     blurb: "Indulgent, sprawling, overflowing with ideas and excess, the White Album became not only a monument to unbridled creativity but a rock archetype." ,
//     review: `In his review of the Beatles' 1963 LP debut, Please Please Me, Tom Ewing pointed out that whether or not you consider them to be the best band of the rock'n'roll era, they certainly have the quintessential pop band story. Everything they did is deeply embedded in rock's DNA, and the band's offhand and ad-hoc gestures have long been established parts of pop music mythology. And of the Beatles' albums, none-- not even Sgt. Pepper's Lonely Hearts Club Band-- rivals The Beatles as a rock archetype. The phrase, "It's like their White Album"-- applied to records like Prince's Sign o' the Times, Hüsker Dü's Zen Arcade, the Clash's Sandinista!, and Pavement's Wowee Zowee, among many others-- has long been accepted critical shorthand. To use the expression is to conjure a familiar cluster of associations: The work in question is large and sprawling, overflowing with ideas but also with indulgences, and filled with a hugely variable array of material, some of which might sound great one day and silly the next. A band's White Album is also most likely assembled under a time of great stress, often resulting in an artistic peak but one that nonetheless scatters clues to its creator's eventual demise.`,
//     tracklist: [
//       {
//         title: "Happiness is a Warm Gun",
//         lyrics: `She's not a girl who misses much
//                 Do-do do-do do-do
//                 Oh, yeah

//                 She's well-acquainted with the touch of the velvet hand like a lizard on a window pane
//                 The man in the crowd with the multi-coloured mirror's on his hobnail boots
//                 Lying with his eyes while his hands are busy working overtime
//                 A soap impression of his wife which he ate and donated to the National Trust

//                 I need a fix, 'cause I'm going down
//                 Down to the bits that I left uptown
//                 I need a fix, 'cause I'm going down

//                 Mother Superior jump the gun
//                 Mother Superior jump the gun
//                 Mother Superior jump the gun
//                 Mother Superior jump the gun
//                 Mother Superior jump the gun
//                 Mother Superior jump the gun

//                 Happiness (happiness) is a warm gun (bang bang, shoot shoot)
//                 Happiness (happiness) is a warm gun, mama (bang bang, shoot shoot)
//                 When I hold you in my arms (oh, yeah)
//                 And I feel (oo) my finger on your trigger (oh, yeah)
//                 I know (oo) nobody can do me no harm (oh, yeah)
//                 Because (happiness) is a warm gun, mama (bang bang, shoot shoot)
//                 Happiness (happiness) is a warm gun, yes, it is (bang bang, shoot shoot)

//                 Happiness is a warm - yes it is - gun (happiness)
//                 (Bang bang, shoot shoot)
//                 Well, don't you know that happiness (happiness)
//                 Is a warm gun (is a warm gun), mama?
//                 (Yeah)`
//       }
//     ]
//   };
