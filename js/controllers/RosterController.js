app.controller('RosterController', [ '$scope', '$stateParams', function($scope, $stateParams) {

  $scope.detail = data.season[parseInt($stateParams.id)];

}]);
