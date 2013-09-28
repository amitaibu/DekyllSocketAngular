'use strict';

angular.module('DrupalSocketAngularApp')
  .directive('dekyllBuild', function () {
    return {
      template: '<div ng-show="build">Build in progress</div>',
      restrict: 'E',
      scope: {
        build: '=build'
      }
    };
  });
