'use strict';

describe('Directive: dekyllBuild', function () {

  // load the directive's module
  beforeEach(module('DrupalSocketAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dekyll-build></dekyll-build>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dekyllBuild directive');
  }));
});
