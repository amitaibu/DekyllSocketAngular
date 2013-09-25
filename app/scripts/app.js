'use strict';

angular.module('DrupalSocketAngularApp', ['btford.socket-io'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function (socket) {
    socket.forward('error');
  });
