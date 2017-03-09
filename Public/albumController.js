var albumApp = angular.module('albumModule', [])
  .controller('albumCtlr', ['$scope', function($scope, $http) {
    
    var whiteAlbumSongs = [
      {name: "Back In The U.S.S.R.", lyrics: "yadda yadda yadda"},
      {name: "Dear Prudence", lyrics: "yadda yadda yadda"},
      {name: "Glass Onion", lyrics: "yadda yadda yadda"},
      {name: "Ob-La-Di, Ob-La-Da", lyrics: "yadda yadda yadda"},
      {name: "Wild Honey Pie", lyrics: "yadda yadda yadda"},
      {name: "The Continuing Story Of Bungalow Bill", lyrics: "yadda yadda yadda"},
      {name: "While My Guitar Gently Weeps", lyrics: "yadda yadda yadda"},
      {name: "Happiness is a Warm Gun", lyrics: `She's not a girl who misses much
                                                Do do do do do do do do 
                                                She's well acquainted with the touch of the velvet hand
                                                Like a lizard on a window pane
                                                The man in the crowd with the multicolored mirrors
                                                On his hobnail boots
                                                Lying with his eyes while his hands are busy
                                                Working overtime
                                                A soap impression of his wife which he made
                                                And donated to the National Trust
                                                I need a fix 'cause I'm going down
                                                Down to the bits that I left uptown
                                                I need a fix 'cause I'm going down
                                                Mother Superior, jump the gun
                                                Mother Superior, jump the gun
                                                Mother Superior, jump the gun
                                                Mother Superior, jump the gun
                                                Happiness is a warm gun
                                                Happiness is a warm gun
                                                When I hold you in my arms
                                                And I feel my finger on your trigger
                                                I know nobody can do me no harm
                                                Because happiness is a warm gun
                                                Yes, it is`},
      {name: "Martha My Dear", lyrics: "yadda yadda yadda"},
      {name: "I'm So Tired", lyrics: "yadda yadda yadda"},
      {name: "Blackbird", lyrics: "yadda yadda yadda"},
      {name: "Piggies", lyrics: "yadda yadda yadda"},
      {name: "Rocky Racoon", lyrics: "yadda yadda yadda"},
      {name: "Don't Pass Me By", lyrics: "yadda yadda yadda"},
      {name: "Why Don't We Do It In The Road?", lyrics: "yadda yadda yadda"},      
      {name: "I Will", lyrics: "yadda yadda yadda"},
      {name: "Julia", lyrics: "yadda yadda yadda"},
      {name: "Birthday", lyrics: "yadda yadda yadda"},
      {name: "Yer Blues", lyrics: "yadda yadda yadda"},
      {name: "Mother Nature's Son", lyrics: "yadda yadda yadda"},
      {name: "Everybody's Got Something To Hide (Except Me And My Monkey)", lyrics: "yadda yadda yadda"},
      {name: "Sexy Sadie", lyrics: "yadda yadda yadda"},
      {name: "Helter Skelter", lyrics: "yadda yadda yadda"},
      {name: "Long Long Long", lyrics: "yadda yadda yadda"},
      {name: "Revolution 1", lyrics: "yadda yadda yadda"},
      {name: "Honey Pie", lyrics: "yadda yadda yadda"},
      {name: "Savoy Truffle", lyrics: "yadda yadda yadda"},
      {name: "Cry Baby Cry", lyrics: "yadda yadda yadda"},
      {name: "Revolution 9", lyrics: "yadda yadda yadda"},
      {name: "Good Night", lyrics: "yadda yadda yadda"}
    ];
    $scope.album = {title: "The Beatles (White Album)", year: 1968, rating: 10, tracklist: whiteAlbumSongs};
    // $scope.lyrics = $scope.album.tracklist[7].lyrics;
    $scope.showLyrics = false;
    $scope.song = $scope.album.tracklist[7]
    $scope.toggleLyrics = function(song) {
      $scope.showLyrics = !$scope.showLyrics;
    }
    $scope.showReview = true;
    $scope.toggleReview = function() {
      $scope.showReview = !$scope.showReview;
    }
    $scope.lyrics = $http.get('/album')
                    .then(function(lyrics) {
                      $scope.lyrics = lyrics;
                      $log.info(lyrics);
    })


  }]);