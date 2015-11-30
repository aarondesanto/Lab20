var app = angular.module('myModule');

app.directive('picbox', function() {
  return {
    restrict: 'E',
    template: 'picbox.html',
    replace: true
  }
});
