
var app = angular.module('resumeApp', []);

app.controller('ResumeController', function($scope, $http, $sce) {
  $http.get('/resume')
    .success(function(data) {
      $scope.resume = data.resume;
  });
  
  $scope.technologiesClick = function(parentId, id) {
    // exclusivise technologies
    $('.tech-collapse').collapse({'toggle': false}).collapse('hide');
    $('.tech-btn').removeClass('active-btn');

    // add active class based on text
    $('#tech-btn-' + parentId + '-' + id).addClass('active-btn');
  };

  $scope.coursesClick = function(parentId, id) {
    // exclusivise technologies
    $('.edu-collapse').collapse({'toggle': false}).collapse('hide');
    $('.tech-btn').removeClass('active-btn');

    // add active class based on text
    $('#tech-btn-' + parentId + '-' + id).addClass('active-btn');
  };

  $scope.renderHtml = function(html) {
    return $sce.trustAsHtml(html);
  };
  
});

