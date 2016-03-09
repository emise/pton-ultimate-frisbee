var app = angular.module('Roster', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider)
{
	$urlRouterProvider.when('', '/roster/0');
	$stateProvider
  .state('roster', {
  		url: '/roster/:id',
   		controller: 'RosterController',
			templateUrl: 'tmpl/seasonRoster.html'
  });
});

var scoreApp = angular.module('Score', ['ui.router']);

scoreApp.config(function ($stateProvider, $urlRouterProvider)
{
	$urlRouterProvider.when('', '/scores/0');
	$stateProvider
  .state('scores', {
  		url: '/scores/:id',
   		controller: 'ScoreController',
			templateUrl: 'tmpl/seasonScore.html'
  });
});
