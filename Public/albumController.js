var albumApp = angular.module('albumModule', [])
  .controller('albumCtlr', ['$scope', function($scope) {    
    $scope.album = {title: "The Beatles (White Album)", year: 1968, rating: 10, tracklist: whiteAlbumSongs};
    var whiteAlbumSongs = [
      {name: "Back In The U.S.S.R.", lyrics: "yadda yadda yadda"},
      {name: "Dear Prudence", lyrics: "yadda yadda yadda"},
      {name: "Glass Onion", lyrics: "yadda yadda yadda"},
      {name: "Ob-La-Di, Ob-La-Da", lyrics: "yadda yadda yadda"},
      {name: "Wild Honey Pie", lyrics: "yadda yadda yadda"},
      {name: "The Continuing Story Of Bungalow Bill", lyrics: "yadda yadda yadda"},
      {name: "While My Guitar Gently Weeps", lyrics: "yadda yadda yadda"},
      {name: "Happiness is a Warm Gun", lyrics: "yadda yadda yadda"},
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
    $scope.song = whiteAlbumSongs[0];
  }]);