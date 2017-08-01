var app = angular.module('mod', []);

app.controller('ctrl', function($scope, $http) {
  console.log('ctrl ready');
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
    console.log($scope.arnold);
  });


}


});

// [Math.floor(Math.random()*arnold.length)]
