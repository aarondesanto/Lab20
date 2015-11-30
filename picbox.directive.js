var app = angular.module('myModule');

app.directive('picbox', function() {
  return {
    restrict: 'E',
    templateUrl: 'picbox.html',
    replace: true
  }
});
