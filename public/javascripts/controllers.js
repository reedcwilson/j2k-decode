
var app = angular.module('resumeApp', []);

app.controller('ResumeController', function($scope, $http) {
  $http.get('/resume')
    .success(function(data) {
      $scope.resume = data.resume;
      console.log(data.resume);
  });
  
  $scope.technologiesClick = function(parentId, id) {
    // exclusivise technologies
    $('.tech-collapse').collapse({'toggle': false}).collapse('hide');
    $('.tech-btn').removeClass('active-btn');

    // add active class based on text
    $('#tech-btn-' + parentId + '-' + id).addClass('active-btn');
  };
  
});

