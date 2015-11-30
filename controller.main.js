var app = angular.module('myModule');

app.controller('mainController', function($scope) {

  $scope.pictures = [
    {
      path: "http://placehold.it/200x200",
      caption: "This is picture one."
    },
    {
      path: "http://placehold.it/200x200",
      caption: "This is picture two."
    },
    {
      path: "http://placehold.it/200x200",
      caption: "This is picture three."
    },
    {
      path: "http://placehold.it/200x200",
      caption: "This is picture four."
    },
    {
      path: "http://placehold.it/200x200",
      caption: "This is picture five."
    },
    {
      path: "http://placehold.it/200x200",
      caption: "This is picture six."
    },
    {
      path: "http://placehold.it/200x200",
      caption: "This is picture seven."
    },
    {
      path: "http://placehold.it/200x200",
      caption: "This is picture eight."
    },
    {
      path: "http://placehold.it/200x200",
      caption: "This is picture nine."
    }
  ];
  $scope.displayCaption = function(picture) {
    alert(picture.caption);
  }

});
