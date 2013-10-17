'use strict';

angular.module('DrupalSocketAngularApp')
  .directive('dekyllEdit', function ($modal, socket, Build) {
    return {
      template: '<a href ng-click="openIframe()">Edit</a>',
      restrict: 'E',
      scope: {
        build: '=build'
      },
      link: function postLink(scope, element, attrs) {
        var type = attrs.type ? attrs.type : 'node';
        var id = attrs.id;

        scope.openIframe = function() {
          scope.url = 'http://localhost/dekyll/www/' + type + '/' + id + '/edit';
          // Open the IFrame with the correct URL.
          scope.modalInstance = $modal.open({
            templateUrl: 'views/dekyll-edit.html',
            controller: ModalInstanceCtrl,
            scope: scope
          });
        };

        scope.$watch('build', function (newVal, oldVal) {
          if (oldVal !== true && newVal === true) {
            // Close the modal.
            scope.modalInstance.dismiss('cancel');
          }
        });

        // Modal controller.
        var ModalInstanceCtrl = function ($scope, $modalInstance) {

          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        };
      }
    };
  });


