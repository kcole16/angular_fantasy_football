window.app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', 
  { 
    templateUrl: 'views/index.html' 
  })
  .when('/nflteams',
  {
    templateUrl: 'views/nfl/list.html'
  })
  .when('/nflteams/:nflTeamId',
  {
    templateUrl: 'views/nfl/view.html'
  })
  .when('/leagues', 
  { 
    templateUrl: 'views/leagues/list.html' 
  })
  .when('/leagues/create', 
  { 
    templateUrl: 'views/leagues/create.html' 
  })  
  .when('/leagues/:leagueId/edit', 
  { 
    templateUrl: 'views/leagues/edit.html' 
  })
  .when('/leagues/:leagueId', 
  { 
    templateUrl: 'views/leagues/view.html' 
  })
  .otherwise({redirectTo: '/'});
  

}]);