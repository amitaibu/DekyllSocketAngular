'use strict';

angular.module('DrupalSocketAngularApp', ['btford.socket-io'])
  .config(function ($routeProvider, socketProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    var mySocket = io.connect('http://localhost:5000');
    socketProvider.ioSocket(mySocket);
  });
