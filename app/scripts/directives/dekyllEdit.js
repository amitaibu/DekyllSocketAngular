'use strict';

angular.module('DrupalSocketAngularApp')
  .directive('dekyllEdit', function ($modal) {
    return {
      template: '<a ng-click="openIframe()">Edit</a>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var type = attrs.type ? attrs.type : 'node';
        var id = attrs.id;

        scope.openIframe = function() {
          scope.url = 'http://localhost/dekyll/www/' + type + '/' + id + '/edit';
          // Open the IFrame with the correct URL.
          var modalInstance = $modal.open({
            templateUrl: 'views/dekyll-edit.html',
            scope: scope
          });
        };
      }
    };
  });
