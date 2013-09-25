'use strict';

angular.module('DrupalSocketAngularApp')
  .controller('MainCtrl', function ($scope, socket) {
    socket.on('connect', function (data) {
      console.log(data);

      // @todo: Get token from service.
      var authMessage = {
        authToken: '6c7dbc1f1db43c2cd1001e60711b57db'
      };
      socket.emit('authenticate', authMessage);
    });

    socket.on('message', function (data) {
      console.log(data);
    });
  });
