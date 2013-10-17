'use strict';

angular.module('DrupalSocketAngularApp')
  .controller('MainCtrl', function ($scope, socket, Build) {

    socket.on('connect', function (data) {
      // @todo: Get token from service.
      var authMessage = {
        authToken: '8afc7914b78830ab420f36e441d1b605'
      };
      socket.emit('authenticate', authMessage);
    });

    Build.isBuilding().success(function (data) {
      $scope.build = data;
    });

    socket.on('message', function (message) {
      Build.setDirty(message.data.build);
      $scope.build = message.data.build;
    });

    $scope.$watch('build', function (newVal, oldVal) {
      if (oldVal === true && newVal === false) {
        // Reload the page.
        location.reload();
      }
    });
  });
