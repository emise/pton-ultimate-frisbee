app.directive('personInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      person: '=' 
    }, 
    templateUrl: 'tmpl/directives/personInfo.html'
  }; 
});