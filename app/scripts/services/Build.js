'use strict';

angular.module('DrupalSocketAngularApp')
  .service('Build', function Build($q, $http) {
    return {

      // Variable to hold the state.
      data: {},

      setDirty: function(value) {
        this.data.build = value;
      },

      isDirty: function() {
        var defer = $q.defer();

        $http({
          method: 'GET',
          url: 'https://localhost/dekyll/www/jekyll-build',
          // Cache the results.
          withCredentials: true
        })
          .success(function (data) {
            defer.resolve(data);
          });

        return defer.promise;
      }
    };
  });
