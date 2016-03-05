app.controller('DefaultSeasonController', function($scope, $stateParams) {

    $scope.data = data;
    $scope.currentYear = data.season[3].years;

    // selected button code
    $scope.selectedIndex = 3;

    $scope.select = function(ind){
        $scope.selectedIndex = ind;
        $scope.currentYear = data.season[ind].years;
    }
});