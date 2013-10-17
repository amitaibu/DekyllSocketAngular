'use strict';

angular.module('DrupalSocketAngularApp')
  .service('Build', function Build($http) {
    return {

      // Variable to hold the state.
      data: {},

      setDirty: function(value) {
        this.data.build = value;
      },

      isBuilding: function() {
        return $http({
          method: 'GET',
          url: 'http://localhost/dekyll/www/jekyll-build',
          // Cache the results.
          withCredentials: true
        });
      }
    };
  });
