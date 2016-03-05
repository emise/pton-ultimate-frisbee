scoreApp.controller('DefaultScoreController', function($scope) {

  $scope.data = scoresData;
  $scope.activeIndex = 0;
  $scope.currentYear = scoresData.season[$scope.activeIndex].year;
  $scope.setActive = function(index) {
    $scope.activeIndex = index;
    $scope.currentYear = scoresData.season[$scope.activeIndex].year;
  }

});
