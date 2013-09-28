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

    Build.isDirty().then(function (data) {
      $scope.build = data;
    });

    socket.on('message', function (message) {
      Build.setDirty(message.data.build);
    });

    $scope.$watch( function () { return Build.data; }, function (oldVal, newVal) {
      if (oldVal.build === false) {
        // Reload the page.
        location.reload();
      }
      $scope.build = newVal.build;
    }, true);
  });
