angular.module('todoApp')
.controller('GithubController', function($scope, $http) {
  $scope.$watch('username', function() {
    $http.get('https://api.github.com/users/' + $scope.username + '/repos')
    .then(function(response) {
      console.log(response);
      $scope.repos = response.data
    });
  });
  $scope.$watch('selectedRepo', function() {
    $http.get('https://api.github.com/repos/' + $scope.selectedRepo + '/commits')
    .then(function(response) {
      console.log(response);
      $scope.repos = response.data
    });
  })
});