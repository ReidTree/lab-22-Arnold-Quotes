var app = angular.module('mod', []);

app.controller('ctrl', function($scope, $http) {
$scope.imgHide = "imgHide";

$scope.moreArnold = function(){
  $scope.quote = "roll-out";
  $scope.imgHide = "imgHide";
  $http({
    method: 'GET',
    url: '/arnold/quotes'
  }).then(function(response) {
    $scope.imgHide = "imgShow";
    $scope.arnold = response.data[Math.floor(Math.random()*response.data.length)];
    $scope.quote = "roll-in";
  });
  $http({
    method: 'GET',
    url: '/arnold/pop'
  }).then(function(response) {
    $scope.pop = response.data[Math.floor(Math.random()*response.data.length)];
  });

}


});

// [Math.floor(Math.random()*arnold.length)]
