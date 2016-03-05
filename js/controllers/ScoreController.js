scoreApp.controller('ScoreController', ['$scope', '$stateParams', function($scope, $stateParams) {
  $scope.data = scoresData;
  id = parseInt($stateParams.id)
  if (id >= scoresData.season.length || id < 0)
    $scope.detail = scoresData.season[0];
  else
    $scope.detail = scoresData.season[id];

}]);
