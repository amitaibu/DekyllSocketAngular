'use strict';

angular.module('DrupalSocketAngularApp')
  .directive('dekyllEdit', function ($modal, socket, Build) {
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
            controller: ModalInstanceCtrl,
            scope: scope
          });

          scope.$watch( function () { return Build.data; }, function (oldVal, newVal) {
            if (newVal.build === true) {
              // Reload the page.
              modalInstance.dismiss('cancel');
            }

          }, true);
        };

        // Modal controller.
        var ModalInstanceCtrl = function ($scope, $modalInstance) {

          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        };
      }
    };
  });


